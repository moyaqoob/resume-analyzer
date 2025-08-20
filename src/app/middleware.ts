// middleware.ts
import { auth0 } from '@/app/lib/auth0';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // Only handle auth routes in middleware
  if (request.nextUrl.pathname.startsWith('/api/auth/')) {
    return auth0.middleware(request);
  }
  
  // For other protected routes, you can add authentication checks here
  // For now, let them pass through
  return;
}

export const config = {
  matcher: [
    // Only match API auth routes for now
    '/api/auth/:path*'
  ],
};