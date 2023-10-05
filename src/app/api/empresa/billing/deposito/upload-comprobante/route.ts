import { NextResponse } from "next/server";
import { cookies } from 'next/headers'; // Import cookies
import { API_URL, API_URL_CORE } from "@/context/config";

export async function POST(request:Request) {
   const nextCookies = cookies(); // Get cookies object
   const token = nextCookies.get('access_token')?.value
   if(token == undefined){
       return NextResponse.json("Usuario no authorizado",{status:401})
     }
   // console.log("TOKEN",token)
 try{
     const body = await request.formData()
   //   console.log(body.get("name"))
     const res = await fetch(`${API_URL_CORE}/deposito/upload/comprobante/`,{
           method:'POST',
           body:body,
           headers:{
               'Authorization':`Bearer ${token}`
           }
       })
       const data = await res.json()
     return NextResponse.json(data,{status:res.status})
  }catch(err){
     console.log(err)
     return NextResponse.json("Error Request",{status:500})
  }
}
