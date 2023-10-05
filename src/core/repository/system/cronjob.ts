export async function GetCronJobs(){
    const res = await fetch(`../../api/system/cronjobs`)
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
     
    //   console.log(res)
      return res.json()
}

export async function DeleteCronJob(data:Cronjob){
    const res = await fetch(`../../api/system/cronjobs/delete`,{
        method:"POST",
        body:JSON.stringify(data)
    })
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
     
    //   console.log(res)
      return res.json()
}

export async function StartCronJob(data:Cronjob){
    const res = await fetch(`../../api/system/cronjobs/start`,{
        method:"POST",
        body:JSON.stringify(data)
    })
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
     
    //   console.log(res)
      return res.json()
}