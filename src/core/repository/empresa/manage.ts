import { LOCAL_URL } from "@/context/config"

export async function GetUsersEmpresa(idEmpresa:number) {
    const res = await fetch(`${LOCAL_URL}/api/empresa/manage/users?id=${idEmpresa}`)
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()
}


export async function CreateUser(body:CreateUserRequest) {
    const res = await fetch(`${LOCAL_URL}/api/empresa/manage/user`,{
      method:"POST",
      body:JSON.stringify(body)
    })
    return res
} 

export async function UpdateUserEstado(body:string) {
  const res = await fetch("../../api/empresa/manage/user/update-estado",{
    method:"POST",
    body:body
  })
  return res
} 

