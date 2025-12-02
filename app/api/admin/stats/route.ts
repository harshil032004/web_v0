import { NextResponse } from 'next/server';

export async function GET() {
  // In a real app, this would query the database
  const stats = {
    totalJobs: 12,
    openJobs: 8,
    totalTestimonials: 15,
    totalApplications: 45
  };
  
  return NextResponse.json(stats);
}