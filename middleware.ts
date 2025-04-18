// import { NextResponse } from "next/server"
// import type { NextRequest } from "next/server"

// export function middleware(request: NextRequest) {
//   // Get response
//   const response = NextResponse.next()

//   // Add security headers
//   const cspHeader = `
//     default-src 'self';
//     script-src 'self' 'unsafe-eval' 'unsafe-inline';
//     style-src 'self' 'unsafe-inline';
//     img-src 'self' blob: data: https://*.vercel.app;
//     font-src 'self';
//     object-src 'none';
//     base-uri 'self';
//     form-action 'self';
//     frame-ancestors 'none';
//     block-all-mixed-content;
//     upgrade-insecure-requests;
//   `
//     .replace(/\s{2,}/g, " ")
//     .trim()

//   response.headers.set("Content-Security-Policy", cspHeader)
//   response.headers.set("X-Content-Type-Options", "nosniff")
//   response.headers.set("X-Frame-Options", "DENY")
//   response.headers.set("X-XSS-Protection", "1; mode=block")
//   response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
//   response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")

//   return response
// }

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      */
//     {
//       source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
//       missing: [
//         { type: "header", key: "next-router-prefetch" },
//         { type: "header", key: "purpose", value: "prefetch" },
//       ],
//     },
//   ],
// }


import { type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

export async function middleware(request: NextRequest) {
  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
