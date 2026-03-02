import { NextResponse } from 'next/server';

export function middleware(request) {
    const authCookie = request.cookies.get('authorization');
    const path = request.nextUrl.pathname;

    // Check if the user is trying to access an /admin route
    if (path.startsWith('/admin')) {
        // If there's no auth cookie, redirect to the home page
        if (!authCookie) {
            return NextResponse.redirect(new URL('/', request.url));
        }
    }

    // Check if an authenticated user is trying to access the login page
    if (path === '/login') {
        if (authCookie) {
            return NextResponse.redirect(new URL('/admin', request.url));
        }
    }

    // Allow the request to continue if they are on a public route or have a cookie
    return NextResponse.next();
}

export const config = {
    matcher: [
        // Apply middleware to all /admin and /login paths
        '/admin/:path*',
        '/login',
    ],
};
