import { NextRequest, NextResponse } from 'next/server';

// In a real app, this would be stored in a database
// eslint-disable-next-line prefer-const, @typescript-eslint/no-explicit-any
let testimonials: any[] = [];

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const testimonialIndex = testimonials.findIndex(t => t.id === id);
  
  if (testimonialIndex === -1) {
    return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 });
  }
  
  testimonials[testimonialIndex] = { ...testimonials[testimonialIndex], ...body };
  return NextResponse.json(testimonials[testimonialIndex]);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const testimonialIndex = testimonials.findIndex(t => t.id === id);
  
  if (testimonialIndex === -1) {
    return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 });
  }
  
  testimonials.splice(testimonialIndex, 1);
  return NextResponse.json({ message: 'Testimonial deleted successfully' });
}