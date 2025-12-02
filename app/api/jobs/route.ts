import { NextRequest, NextResponse } from 'next/server';

// In a real app, this would be stored in a database
// eslint-disable-next-line prefer-const, @typescript-eslint/no-explicit-any
let jobs: any[] = [];

export async function GET() {
  return NextResponse.json(jobs);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newJob = {
    id: Date.now().toString(),
    ...body
  };
  jobs.push(newJob);
  return NextResponse.json(newJob, { status: 201 });
}