

export async function SendNotificationDiffusion(data:RequestNotificationDiffusion){
    const res = await fetch(`../../api/system/notification`,{
        method:"POST",
        body:JSON.stringify(data),
      })
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
     
    //   console.log(res)
      return res.json()
}