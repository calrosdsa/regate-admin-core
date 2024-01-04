import { NextResponse } from "next/server";
import { cookies } from 'next/headers'; // Import cookies
import { API_URL, API_URL_CORE } from "@/context/config";
export async function POST(request:Request) {
   const nextCookies = cookies(); // Get cookies object
   const token = nextCookies.get('access_token')?.value
   if(token == undefined){
    return NextResponse.json("Usuario no authorizado",{status:401})
  }
  try{
      const body = await request.text()
      console.log(body)
      // console.log("BODYY-------",JSON.stringify(body))
      const res = await fetch(`${API_URL_CORE}/notification/diffusion/`,{
         method:"POST",
         body:body,
         headers:{
         'Content-Type' :'application/json',
         'Authorization':`Bearer ${token}`
        }}
      )
      const data =await res.json()
      // console.log("BODY-RES",data)
      return NextResponse.json(data,{status:200})
   }catch(err){
      console.log("error request",err)
      return NextResponse.json("Error Request",{status:500})
   }
 
}

