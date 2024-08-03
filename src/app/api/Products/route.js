import mongoose from "mongoose";
import Pooduts from "../schema/schemaProducts";
import { Connect } from "../lib/db";
import { NextResponse } from "next/server"

export async function GET(req,res){
    try{Connect()
        const query=req.nextUrl.searchParams.get('name')
        if(!query){
        const recipe=await Pooduts.find()
        return NextResponse.json({
            status:"Done",
            data:recipe,
        },{status:200})}
        if(query){
            const recipe=await Pooduts.find({name:query}).limit(5)
            return NextResponse.json({
                status:"Done",
                data:recipe,
            },{status:200})
        }

        // const posting=await Pooduts.create(data)

    }catch(err){
        console.log(err)
        return NextResponse.json({
            status:"Error",
        },{status:404})
    }
}

// post requsest handeler function

export async function POST(req,res){
    try{Connect()
        const data=await req.json()
        // console.log(data)
        const recipe=await Pooduts.create(data)
        return NextResponse.json({
            status:"Done",
            data:recipe
    },{status:200})}catch(err){
        console.log(err)
        return NextResponse.json({
            status:"Error",
        },{status:404})
    }
}