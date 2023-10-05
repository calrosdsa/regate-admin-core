import { LOCAL_URL } from "@/context/config"
import { EmpresaEstado } from "@/core/type/empresa/empresa"

export async function GetEmpresasByEstado(estado:EmpresaEstado){
    const res = await fetch(`${LOCAL_URL}/api/empresa/?estado=${estado}`)
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
      return res.json()
}

export async function GetEmpresa(uuid:string){
    const res = await fetch(`${LOCAL_URL}/api/empresa/detail?uuid=${uuid}`)
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
      return res.json()
}
