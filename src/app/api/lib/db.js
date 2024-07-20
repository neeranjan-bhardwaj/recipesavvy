import mongoose from 'mongoose'

global.contion={
    connect:null,
}

export function Connect(){
    if(global.contion.connect){
        console.log("old connect")
        return global.contion.connect
    }
    if(!global.contion.connect){
        const string=process.env.MongoDB
        global.contion.connect=mongoose.connect(string,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log("new connect")
    }    
}