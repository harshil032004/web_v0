import { NextRequest, NextResponse } from 'next/server';

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address?: string;
  licenseNumber?: string;
  createdAt: string;
}

let customers: Customer[] = [];

export async function GET() {
  return NextResponse.json(customers);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newCustomer: Customer = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      ...body
    };
    customers.push(newCustomer);
    return NextResponse.json(newCustomer, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}