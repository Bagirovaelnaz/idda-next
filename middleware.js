import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl;

  console.log(url)

  if (url.pathname === "/") {
    return NextResponse.redirect(new URL("/activity", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
