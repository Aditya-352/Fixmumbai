import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { signJwtToken } from '@/lib/auth';

type GoogleUserInfo = {
  sub: string;
  email: string;
  email_verified: boolean;
  name?: string;
};

export async function GET(req: NextRequest) {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;
  const publicUrl = (path: string) =>
    new URL(path, appUrl);

  if (!clientId || !clientSecret || !appUrl) {
    return NextResponse.redirect(
      new URL('/civic/admin/login?error=google_error', req.url)
    );
  }

  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');
  const returnedState = searchParams.get('state');
  const savedState = req.cookies.get('fixmumbai_oauth_state')?.value;

  if (!code || !returnedState || !savedState || returnedState !== savedState) {
    return NextResponse.redirect(
      new URL('/civic/admin/login?error=invalid_state', req.url)
    );
  }

  const redirectUri = `${appUrl.replace(/\/$/, '')}/civic/api/auth/google/callback`;

  try {
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code',
      }),
      cache: 'no-store',
    });

    if (!tokenResponse.ok) {
      throw new Error('Google token exchange failed');
    }

    const tokenData = await tokenResponse.json();

    if (!tokenData.access_token) {
      throw new Error('Google did not return an access token');
    }

    const userInfoResponse = await fetch(
      'https://openidconnect.googleapis.com/v1/userinfo',
      {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
        },
        cache: 'no-store',
      }
    );

    if (!userInfoResponse.ok) {
      throw new Error('Google userinfo request failed');
    }

    const googleUser = (await userInfoResponse.json()) as GoogleUserInfo;

    if (!googleUser.email || !googleUser.email_verified) {
      return NextResponse.redirect(
        new URL('/civic/admin/login?error=not_authorized', req.url)
      );
    }

    const user = await db.user.findUnique({
      where: { email: googleUser.email.toLowerCase() },
    });

    if (
      !user ||
      !['AUTHORITY_ADMIN', 'SUPER_ADMIN'].includes(user.role)
    ) {
      return NextResponse.redirect(
        new URL('/civic/admin/login?error=not_authorized', req.url)
      );
    }

    const session = signJwtToken({
      id: user.id,
      email: user.email,
      name: user.name || googleUser.name || user.email,
      role: user.role as
        | 'PUBLIC_USER'
        | 'AUTHENTICATED_USER'
        | 'MODERATOR'
        | 'WARD_OPERATOR'
        | 'AUTHORITY_ADMIN'
        | 'SUPER_ADMIN',
      wardId: user.wardId || undefined,
    });

    const response = NextResponse.redirect(
      new URL('/civic/admin', appUrl)
    );

    response.cookies.set('fixmumbai_session', session, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60,
    });

    response.cookies.set('fixmumbai_oauth_state', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 0,
    });

    return response;
  } catch (error) {
    console.error('Google OAuth error:', error);
    return NextResponse.redirect(
      new URL('/civic/admin/login?error=google_error', req.url)
    );
  }
}
