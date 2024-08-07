import { NextResponse } from "next/server";


export default function middleware(request) {
  const { pathname } = request.nextUrl;
  console.log(request.cookies.has("userAuth"))
  if (
    (pathname === "/" || pathname === "/accounts") &&
    !request.cookies.has("userAuth")
  )
    return NextResponse.redirect(new URL("/login", request.url));

  if (
    (pathname === "/login" || pathname === "/register") &&
    request.cookies.has("userAuth")
  )
    return NextResponse.redirect(new URL("/", request.url));


  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/accounts", "/login", "/register"],
};
