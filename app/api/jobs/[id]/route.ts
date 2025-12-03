import { NextRequest, NextResponse } from 'next/server';

// In a real app, this would be stored in a database
// eslint-disable-next-line prefer-const, @typescript-eslint/no-explicit-any
let jobs: any[] = [];

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const jobIndex = jobs.findIndex(job => job.id === id);
  
  if (jobIndex === -1) {
    return NextResponse.json({ error: 'Job not found' }, { status: 404 });
  }
  
  jobs[jobIndex] = { id, ...body };
  return NextResponse.json(jobs[jobIndex]);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const jobIndex = jobs.findIndex(job => job.id === id);
  
  if (jobIndex === -1) {
    return NextResponse.json({ error: 'Job not found' }, { status: 404 });
  }
  
  jobs.splice(jobIndex, 1);
  return NextResponse.json({ message: 'Job deleted successfully' });
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const jobIndex = jobs.findIndex(job => job.id === id);
  
  if (jobIndex === -1) {
    return NextResponse.json({ error: 'Job not found' }, { status: 404 });
  }
  
  jobs[jobIndex] = { ...jobs[jobIndex], ...body };
  return NextResponse.json(jobs[jobIndex]);
}