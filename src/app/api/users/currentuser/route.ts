import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/userModel";
import { validateJwt } from "@/helpers/validateJwt";

export async function GET(request: NextRequest) {
  try {
    
     const userId= await validateJwt(request)

     const userDetails=await User.findById(userId).select('-password')


    return NextResponse.json(
      { message: "user fetched successfully",user:userDetails },
      {status:200}
    );
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
