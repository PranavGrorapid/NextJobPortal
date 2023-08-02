
"use client";

import React, { useState } from 'react'
import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import axios from 'axios';


const Login = () => {


  const router=useRouter()

  const [user,setUser]=useState(
      {
         
          email:'',
          password:'',
         
      }
   )

   const [buttonDisabled,setButtonDisabled]=useState(true)
  const [loading,setLoading]=useState(false)



  const handleSubmit=async(e:any)=>{

    try{

   e.preventDefault()
    console.log('signup',user)
     setLoading(true)
   const {data}=await axios.post('/api/users/login',user)
   console.log('data',data)
   setLoading(false)
   
   
   toast.success('user login successfully')
    router.push('/') 

    }

    catch(err:any){

        console.log(err)
        toast.error( err ? err.response.data.error : err.message)     

    }   

    finally{
 
       setLoading(false)
    }

}
 
    return (

    <div className='bg-black h-full  flex justify-center items-center '>
    
      <div className='bg-gray-200 p-10 lg:px-20 my-20 shadow-lg border-2 border-gray-600'>

        <div className='flex flex-col space-y-10'>

            <div className='font-bold text-2xl'>
                RecruitYes <span className='text-blue-500'>Login</span>
            </div>

            <Toaster />


      <form  onSubmit={handleSubmit}>

     

         <div className='my-2' >
                <label htmlFor="Email" className='font-bold'>Email</label>
                </div>
                <div>
                <input className='bg-gray-50 border-2 mt-1 border-black w-full h-10' onChange={(e)=>setUser({...user,email:e.target.value})} />
                </div>


                <div className='my-2' >
                <label htmlFor="Password" className='font-bold'>Password</label>
                </div>
                <div>
                <input className='bg-gray-50 border-2 mt-1 border-black  w-full h-10'  onChange={(e)=>setUser({...user,password:e.target.value})}  />
                </div>

                <div className='mt-5'>
                    <button type='submit' className='bg-black text-white w-full py-2 hover:bg-gray-800'>Submit</button>
                    <div className='text-black pt-4 text-xs'>
                    Haven't registered yet  <Link href='/register'> <span className='text-green-600 font-bold ps-2'>Register Now </span></Link>
                </div>
                </div>

               
            

     


      </form>

     

        </div>

      </div>

    </div>

  )
}

export default Login
