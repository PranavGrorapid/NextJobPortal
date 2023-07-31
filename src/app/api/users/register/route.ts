import { NextRequest, NextResponse } from "next/server";
import {connect} from '../../../../config/dbConfig'
import User from "@/app/models/userModel";
import bcryptjs from 'bcryptjs';

connect()



export async function POST(request:NextRequest){ 


    try{


    const reqBody= await request.json()

  
    const {username,email,password,userType}=reqBody

    
    
     console.log('reqnod',reqBody)

    // find if user with same email exist or not

      const userExist= await User.findOne({email})

      if(userExist){

        return NextResponse.json({error:'user already exists'},{status:400})
      }

      ///hash the password

      const salt=await bcryptjs.genSalt(10)

      const hashedPassword=await bcryptjs.hash(password,salt)

     

      // create a new user
      const newUser=await new User(
        {
            username,
            password:hashedPassword,
            email,
            userType
        }
      )

      const savedUser=await newUser.save()

      return NextResponse.json({

         message:'user created succesfully',
         status:200,
         success:true,
         savedUser
        
      })

    }

    catch(err:any){

        console.log(err);
        
        return NextResponse.json({message:err.message},{status:500})
    }



 }  