// /api/auth/[...auth]/route.ts
import { auth0 } from '@/app/lib/auth0';
import { NextRequest } from 'next/server';

// // Handle all HTTP methods for the auth routes
export async function GET(request: NextRequest) {
  return auth0.middleware(request);
}
export async function POST(request: NextRequest) {
  return auth0.middleware(request);
}
