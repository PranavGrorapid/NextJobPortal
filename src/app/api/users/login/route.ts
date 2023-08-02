import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../../../config/dbConfig";
import User from "@/app/models/userModel";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken'

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const { email, password } = reqBody;

    console.log("reqnod", reqBody);

    // find if user with same email exist or not

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return NextResponse.json(
        { error: "user not found" },
        { status: 400 }
      );
    }

    ///hash the password



    const matchPassword = await bcryptjs.compare(password, userExist.password);


     if(!matchPassword){

        return NextResponse.json({error:'password mismatch'},{status:400})
     }


     /// create a token

     const tokenData={

        username:userExist.username,
        userId:userExist._id
     }

     const token=jwt.sign(tokenData,process.env.JWT_SECRET!,{expiresIn:'2D'})

     const response=NextResponse.json({messsage:'user login successfully'},{status:200})

     

     // setting cookies in response

     response.cookies.set('jobportaltoken',token,{httpOnly:true,maxAge:60*60*24*1000})

     return response; 


   
  } catch (err: any) {
    console.log(err);

    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
