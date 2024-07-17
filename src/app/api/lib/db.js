import mongoose from 'mongoose'

global.contion={
    conn:null,
}

export function Connect(){
    if(global.contion.conn){
        console.log("previous")
        return global.contion.conn
    }
    if(!global.contion.conn){
        const string=process.env.MongoDB
        global.contion.conn=mongoose.connect(string,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log("new connect")
    }    
}