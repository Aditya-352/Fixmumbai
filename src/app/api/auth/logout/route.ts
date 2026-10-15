import { NextResponse } from 'next/server';
import { APP_BASE_PATH } from '@/lib/base-path';

export async function POST(req: Request) {
  const response = NextResponse.redirect(new URL(`${APP_BASE_PATH}/admin/login`, req.url));

  response.cookies.set('fixmumbai_session', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: APP_BASE_PATH,
    maxAge: 0,
  });

  return response;
}
