import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export async function validateJwt(request: NextRequest) {
  try {
    const token = request.cookies.get("jobportaltoken")?.value;

    if (!token) {
      return NextResponse.json({ message: "not authorized" }, { status: 400 });
    }

    const userData = jwt.verify(token, process.env.JWT_SECRET!);

    return userData.userId;
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
