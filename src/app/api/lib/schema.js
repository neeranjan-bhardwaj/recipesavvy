import mongoose from "mongoose"

global.mo={
    go:null
}

export function Do(){
    if(!global.mo.go){
        // console.log(global.mo.go)
    global.mo.go=testsch
    console.log(`${global.mo.go} new`)
    return mongoose.model('test2',global.mo.go)
    }
    if(global.mo.go){
        console.log("old")
        return mongoose.model('test2',global.mo.go)
    }
}