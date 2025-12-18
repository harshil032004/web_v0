import { NextRequest, NextResponse } from 'next/server';

interface Vehicle {
  id: string;
  name: string;
  category: string;
  seats: string;
  luggage: string;
  imageSrc: string;
  features: string[];
  available: boolean;
  pricePerDay?: number;
}

let vehicles: Vehicle[] = [
  {
    id: '1',
    name: 'MG ZS EV',
    category: 'SUV',
    seats: '5 Seats',
    luggage: '3 Bags',
    imageSrc: '/MG.jpg',
    features: [
      'GPS Navigation',
      'Climate Control',
      'Bluetooth Audio',
      'USB Charging',
      'Safety Features',
      'Premium Interior'
    ],
    available: true,
    pricePerDay: 120
  },
  {
    id: '2',
    name: 'Tata Nexon EV',
    category: 'Compact SUV',
    seats: '5 Seats',
    luggage: '2 Bags',
    imageSrc: '/Tata.jpg',
    features: [
      'GPS Navigation',
      'Climate Control',
      'Bluetooth Audio',
      'USB Charging',
      'Safety Features',
      'Eco Mode'
    ],
    available: true,
    pricePerDay: 100
  }
];

export async function GET() {
  return NextResponse.json(vehicles);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newVehicle: Vehicle = {
      id: Date.now().toString(),
      available: true,
      ...body
    };
    vehicles.push(newVehicle);
    return NextResponse.json(newVehicle, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}