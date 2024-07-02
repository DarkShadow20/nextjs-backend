import { NextRequest } from "next/server";


export function GET(){
    return Response.json({
        email:"kunal@gmail.com",
        name:"Kunal"
    })
}


export async function POST(req:NextRequest){

    const body = await req.json();

    console.log(body)

    return Response.json({
        message:"You are logged in!"
    })

}