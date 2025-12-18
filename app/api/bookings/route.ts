import { NextRequest, NextResponse } from 'next/server';

interface Booking {
  id: string;
  vehicleId: string;
  customerName: string;
  email: string;
  phone: string;
  pickupDate: string;
  returnDate: string;
  pickupLocation: string;
  dropoffLocation: string;
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

let bookings: Booking[] = [];

export async function GET() {
  return NextResponse.json(bookings);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newBooking: Booking = {
      id: Date.now().toString(),
      status: 'pending',
      createdAt: new Date().toISOString(),
      ...body
    };
    bookings.push(newBooking);
    return NextResponse.json(newBooking, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}