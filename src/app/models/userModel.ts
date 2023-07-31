import mongoose from "mongoose";

const userSchema=new mongoose.Schema({

    username:{

        type:String,
        required:[true,'please provide an username'],
        unique:true

    },


    userType:{

        type:String,
        required:[true,'please provide an userType'],
        

    },

    email:{

        type:String,
        required:[true,'please provide an email'],
        unique:true

    },

    password:{

        type:String,
        required:[true,'please provide an password'],
        
    },


  


    isAdmin:{

        type:Boolean,
        default:false
    },

},

{
    timestamps:true,
}

)

const User=  mongoose.models.users||  mongoose.model('users',userSchema)

export default User;