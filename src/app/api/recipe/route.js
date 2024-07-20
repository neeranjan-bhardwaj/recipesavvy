import { NextResponse } from 'next/server'
import data from './RecipeData.json'
import { Connect } from '../lib/db'
import Recipe from '../lib/schema'

export async function GET(req,res){
    try{Connect()
        const query=req.nextUrl.searchParams.get('name')
        if(!query){
        const recipe=await Recipe.find().limit(10)
        return NextResponse.json({
            status:"Done",
            data:recipe,
        },{status:200})}
        if(query){
            const recipe=await Recipe.find({name:query}).limit(5)
            return NextResponse.json({
                status:"Done",
                data:recipe,
            },{status:200})
        }
    }catch(err){
        console.log(err)
        return NextResponse.json({
            status:"Error",
        },{status:404})
    }
}
export async function POST(req,res){
    try{Connect()
        const data=await req.json()
        // console.log(data)
        const recipe=await Recipe.create(data)
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

export async function DELETE(req,res){
    try{Connect()
        const query=req.nextUrl.searchParams.get('delete')
        console.log(query)
        if(query){
            const Delete=await Recipe.findByIdAndDelete(query)
            return NextResponse.json({
                status:"Done",
                },{status:200})
            }
        if(!query){
            return NextResponse.json({
                status:"name is not there",
                },{status:404})
        }    
    }catch(err){
        console.log(err)
        return NextResponse.json({
            status:"Error",
            },{status:404})
    }
}

export async function PATCH(req,res){
    try{Connect()
        const query=req.nextUrl.searchParams.get('update')
        const data=await req.json()
        console.log(data)
        if(query){
            const update=await Recipe.findByIdAndUpdate(query,data,{new:true})
            return NextResponse.json({
                status:"Done",
                data:update
                },{status:200})
        }
        if(!query){
            return NextResponse.json({
                status:"name is not there",
                },{status:404})
        }    
    }catch(err){
        console.log(err)
        return NextResponse.json({
            status:"Error",
            },{status:404})
    }
}