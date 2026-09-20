import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'fixmumbai-secure-civic-secret-key-2026';

export interface UserSession {
  id: string;
  email: string;
  name: string;
  role: 'PUBLIC_USER' | 'AUTHENTICATED_USER' | 'MODERATOR' | 'WARD_OPERATOR' | 'AUTHORITY_ADMIN' | 'SUPER_ADMIN';
  wardId?: string;
}

export function hashPassword(password: string): string {
  return bcrypt.hashSync(password, 10);
}

export function comparePassword(password: string, hash: string): boolean {
  return bcrypt.compareSync(password, hash);
}

export function signJwtToken(user: UserSession): string {
  return jwt.sign(user, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyJwtToken(token: string): UserSession | null {
  try {
    return jwt.verify(token, JWT_SECRET) as UserSession;
  } catch {
    return null;
  }
}

export async function getServerSession(): Promise<UserSession | null> {
  const cookieStore = cookies();
  const token = cookieStore.get('fixmumbai_session')?.value;
  if (!token) return null;
  return verifyJwtToken(token);
}

export async function requireRole(allowedRoles: string[]): Promise<UserSession> {
  const session = await getServerSession();
  if (!session || !allowedRoles.includes(session.role)) {
    throw new Error('Unauthorized access');
  }
  return session;
}
