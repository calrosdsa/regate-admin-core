import { redirectToLogin } from "@/context/actions"

export async function GetBanks(){
    const res = await fetch(`../../api/empresa/billing/banks`)
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
     
    //   console.log(res)
      return res.json()
}

export async function GetBankAccount(){
    const res = await fetch(`../../api/empresa/billing/bank-account`)
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
     
    //   console.log(res)
      return res.json()
}

export async function GetDepositos(data:DepositoFilterData,page:string){
    const res = await fetch(`../../api/empresa/billing/depositos?page=${page}`,{
      method:"post",
      body:JSON.stringify(data)
    })
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
     
    //   console.log(res)
      return res.json()
}
export async function GetDeposito(uuid:string){
  const res = await fetch(`../../api/empresa/billing/deposito?uuid=${uuid}`)
  if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
  //   console.log(res)
    return res.json()
}

export async function GetDepositosEmpresa(data:DepositoFilterData,page:number){
  const res = await fetch(`../../api/empresa/billing/depositos-empresa?page=${page}`,
    {
      method:'POST',
      body:JSON.stringify(data)
  })
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
     
    //   console.log(res)
      return res.json()
}

export async function GetDepositosFromDepositoEmpresa(id:number){
  const res = await fetch(`../../api/empresa/billing/depositos-empresa/depositos?id=${id}`)
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
     
    //   console.log(res)
      return res.json()
}

export async function GetReservasPagadas(data:ReservaDataFilter,page:number){
  const res = await fetch(`../../api/empresa/billing/reservas-pagadas?page=${page}`,{
    method:'post',
    body:JSON.stringify(data)
  })
  if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
  //   console.log(res)
    return res.json()
}

export async function UploadComprobanteDeposito(data:FormData) {
  const res = await fetch(`../../api/empresa/billing/deposito/upload-comprobante`,{
    method:"POST",
    body:data,
  })
  if(res.status == 401) {
    redirectToLogin()
  }
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}



export async function UpdateBankAccount(data:AccountBank){
    const res = await fetch(`../../api/empresa/billing/bank-account?id=${data.id}`,{
        method:'POST',
        body:JSON.stringify(data)
    })
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
     
    //   console.log(res)
      return res.json()
}