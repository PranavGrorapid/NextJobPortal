import mongoose from "mongoose";

export async function connect(){

    try{

          mongoose.connect(process.env.MONGO_URL!)
          
          const connection=mongoose.connection

          connection.on('connected',()=>{

             console.log('mongoDB connected successfully...');
             
          })

          connection.on('err',(err)=>{

              console.log('err occured',err);
              process.exit();
              
          })
    }
    
    catch(err){

        console.log('something went wrong...');
        console.log(err);
        
        
    }
}