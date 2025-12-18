import { NextRequest } from 'next/server';

export interface AuthUser {
  id: string;
  role: 'admin' | 'customer';
}

export function getAuthUser(request: NextRequest): AuthUser | null {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return null;
    }
    
    const token = authHeader.substring(7);
    const decoded = JSON.parse(Buffer.from(token, 'base64').toString());
    
    return decoded as AuthUser;
  } catch (error) {
    return null;
  }
}

export function requireAuth(request: NextRequest): AuthUser {
  const user = getAuthUser(request);
  if (!user) {
    throw new Error('Authentication required');
  }
  return user;
}

export function requireAdmin(request: NextRequest): AuthUser {
  const user = requireAuth(request);
  if (user.role !== 'admin') {
    throw new Error('Admin access required');
  }
  return user;
}