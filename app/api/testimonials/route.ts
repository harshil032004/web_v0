import { NextRequest, NextResponse } from 'next/server';

// In a real app, this would be stored in a database
// eslint-disable-next-line prefer-const, @typescript-eslint/no-explicit-any
let testimonials: any[] = [];

export async function GET() {
  return NextResponse.json(testimonials);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newTestimonial = {
    id: Date.now().toString(),
    ...body
  };
  testimonials.push(newTestimonial);
  return NextResponse.json(newTestimonial, { status: 201 });
}