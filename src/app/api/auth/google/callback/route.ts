import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { signJwtToken } from '@/lib/auth';
import { APP_BASE_PATH } from '@/lib/base-path';

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
  // Behind the reverse proxy req.url is the internal host (e.g. localhost:3000),
  // so every redirect must be built from the public app URL instead.
  const publicUrl = (path: string) => new URL(path, appUrl || req.url);

  if (!clientId || !clientSecret || !appUrl) {
    return NextResponse.redirect(
      publicUrl(`${APP_BASE_PATH}/admin/login?error=google_error`)
    );
  }

  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');
  const returnedState = searchParams.get('state');
  const savedState = req.cookies.get('prisehat_pulse_oauth_state')?.value;

  if (!code || !returnedState || !savedState || returnedState !== savedState) {
    return NextResponse.redirect(
      publicUrl(`${APP_BASE_PATH}/admin/login?error=invalid_state`)
    );
  }

  const redirectUri = `${appUrl.replace(/\/$/, '')}${APP_BASE_PATH}/api/auth/google/callback`;

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
        publicUrl(`${APP_BASE_PATH}/admin/login?error=not_authorized`)
      );
    }

    const email = googleUser.email.trim().toLowerCase();

    let user = await db.user.findFirst({
      where: { email: { equals: email, mode: 'insensitive' } },
    });

    // Bootstrap: emails listed in ADMIN_EMAILS (comma separated) become
    // SUPER_ADMIN on first verified Google sign-in, so a fresh database
    // (prisma db push never seeds) is not locked out.
    const bootstrapAdmins = (process.env.ADMIN_EMAILS || '')
      .split(',')
      .map((e) => e.trim().toLowerCase())
      .filter(Boolean);

    if (bootstrapAdmins.includes(email)) {
      if (!user) {
        user = await db.user.create({
          data: {
            email,
            name: googleUser.name || email,
            role: 'SUPER_ADMIN',
          },
        });
      } else if (!['AUTHORITY_ADMIN', 'SUPER_ADMIN'].includes(user.role)) {
        user = await db.user.update({
          where: { id: user.id },
          data: { role: 'SUPER_ADMIN' },
        });
      }
    }

    if (
      !user ||
      !['AUTHORITY_ADMIN', 'SUPER_ADMIN'].includes(user.role)
    ) {
      return NextResponse.redirect(
        publicUrl(`${APP_BASE_PATH}/admin/login?error=not_authorized`)
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
      publicUrl(`${APP_BASE_PATH}/admin`)
    );

    response.cookies.set('prisehat_pulse_session', session, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: APP_BASE_PATH,
      maxAge: 7 * 24 * 60 * 60,
    });

    response.cookies.set('prisehat_pulse_oauth_state', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: APP_BASE_PATH,
      maxAge: 0,
    });

    return response;
  } catch (error) {
    console.error('Google OAuth error:', error);
    return NextResponse.redirect(
      publicUrl(`${APP_BASE_PATH}/admin/login?error=google_error`)
    );
  }
}
