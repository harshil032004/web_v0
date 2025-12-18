import { NextRequest, NextResponse } from 'next/server';

interface User {
  id: string;
  email: string;
  password: string;
  role: 'admin' | 'customer';
  name: string;
}

const users: User[] = [
  {
    id: '1',
    email: 'admin@evera.com',
    password: 'admin123',
    role: 'admin',
    name: 'Admin User'
  }
];

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
    
    const token = Buffer.from(JSON.stringify({ id: user.id, role: user.role })).toString('base64');
    
    return NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      },
      token
    });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}