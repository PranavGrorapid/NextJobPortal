import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  try {
    // check if token is present

    const token = request.cookies.get("jobportaltoken");

    console.log('middleware',request.nextUrl)

    
    const publicPage =
      request.nextUrl.pathname === "/login" ||
      request.nextUrl.pathname === "/register";

    if (!token && !publicPage) {
      return NextResponse.redirect(new URL("/login", request.nextUrl));
    }

    if(token && publicPage){

      return NextResponse.redirect(new URL("/", request.nextUrl));
    }

    return NextResponse.next();
    
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/","/login","/register"]
};
