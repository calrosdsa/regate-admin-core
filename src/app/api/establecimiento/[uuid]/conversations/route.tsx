import { NextResponse } from "next/server";
import { cookies } from 'next/headers'; // Import cookies
import { API_URL_MESSAGE } from "@/context/config";

export async function GET(request:Request,
    { params }: { params: { uuid: string } }) {
   const nextCookies = cookies(); // Get cookies object
   const token = nextCookies.get('access_token')?.value
   console.log(token)
   if(token == undefined){
    return NextResponse.json("Usuario no authorizado",{status:401})
  }
  try{
    //   const body:Cupo = await request.json()
      const res = await fetch(`${API_URL_MESSAGE}/conversations/${params.uuid}/`,
      {
         headers:{
         'Authorization':`Bearer ${token}`
      }})
      const data =await res.json()
      // console.log(data)
      return NextResponse.json(data,{status:200})
   }catch(err){
      // console.log(err)
      return NextResponse.json("Error Request",{status:500})
   }
}