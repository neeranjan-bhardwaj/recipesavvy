import { NextResponse } from "next/server";
import Users from "../schema/schemausers";
import { Connect } from "../lib/db";
const jwt=require('jsonwebtoken')

export async function POST(req,res) {
    Connect()
    const user=await req.json()
    const singup=await Users.create(user)

    const token=jwt.sign({id:user._id},process.env.JWT)
    console.log(token)

    return NextResponse.json({
        message: "User created successfully",
        user: singup
    },{status:200})
}