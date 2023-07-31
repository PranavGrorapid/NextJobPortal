import React from 'react'
import Link from 'next/link'

const Login = () => {
 
    return (

    <div className='bg-black h-full  flex justify-center items-center '>
    
      <div className='bg-gray-200 p-10 lg:px-20 my-20 shadow-lg border-2 border-gray-600'>

        <div className='flex flex-col space-y-10'>

            <div className='font-bold text-2xl'>
                RecruitYes <span className='text-blue-500'>Login</span>
            </div>


      <form action="">

     

         <div className='my-2' >
                <label htmlFor="Email" className='font-bold'>Email</label>
                </div>
                <div>
                <input className='bg-gray-50 border-2 mt-1 border-black w-full h-10' />
                </div>


                <div className='my-2' >
                <label htmlFor="Password" className='font-bold'>Password</label>
                </div>
                <div>
                <input className='bg-gray-50 border-2 mt-1 border-black  w-full h-10' />
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
