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

// Import from main bookings route (in production, use database)
let bookings: Booking[] = [];

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const booking = bookings.find(b => b.id === params.id);
  if (!booking) {
    return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
  }
  return NextResponse.json(booking);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const bookingIndex = bookings.findIndex(b => b.id === params.id);
    
    if (bookingIndex === -1) {
      return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
    }
    
    bookings[bookingIndex] = { ...bookings[bookingIndex], ...body };
    return NextResponse.json(bookings[bookingIndex]);
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const bookingIndex = bookings.findIndex(b => b.id === params.id);
  
  if (bookingIndex === -1) {
    return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
  }
  
  bookings.splice(bookingIndex, 1);
  return NextResponse.json({ message: 'Booking deleted successfully' });
}