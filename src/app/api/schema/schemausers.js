import mongoose,{Schema, Types} from "mongoose";
import bcrypt from "bcrypt"

const usersSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },    
    password:{
        type:String,
        required:true
    },
    photo:{
        type:String
    }    
})

usersSchema.pre("save",async function(next) {
    if(!this.isModified('password')) return next()
    
    this.password=await bcrypt.hash(this.password,8) 
})

const Users=mongoose.models.users||mongoose.model("users",usersSchema)

export default Users
