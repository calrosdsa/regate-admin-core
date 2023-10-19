// import { NextApiRequest,NextApiResponse } from "next";
// import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';
import { NextResponse } from "next/server";
import { STATUS_CODES } from "http";
import { API_URL, API_URL_CORE } from "@/context/config";
import { cookies } from 'next/headers'; // Import cookies


export async function GET(request:Request) {
    const {searchParams} = new URL(request.url)
    const id = searchParams.get("id")
    const nextCookies = cookies(); // Get cookies object
    const token = nextCookies.get('access_token')?.value
    if(token == undefined){
        return NextResponse.json("Usuario no authorizado",{status:401})
      }
    // console.log("TOKEN",token)
  try{
    //   console.log(body.get("name"))
      const res = await fetch(`${API_URL_CORE}/core/establecimiento/verificar/${id}/`,{
            method:'PUT',
            // body:body,
            headers:{
                'Authorization':`Bearer ${token}`
            }
        })
        const data = await res.json()
        // console.log("RESPONSE",data)
      return NextResponse.json(data,{status:200})
   }catch(err){
      console.log(err)
      return NextResponse.json("Error Request",{status:500})
   }
}

