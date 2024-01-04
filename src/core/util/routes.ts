import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export const rootAdmin = "/admin"
export const rootEstablecimiento = "/establecimiento"

export const adminRoutes = {
    manage:{
        empresas:`${rootAdmin}/manage/empresas`,
        establecimientos:`${rootAdmin}/manage/establecimientos`,
        users:`${rootAdmin}/manage/users`
    },
    data:{
        labels:`${rootAdmin}/data/labels`
    },
    depositos:`${rootAdmin}/depositos`,
    dashboad:{
        main:`${rootAdmin}/dashboard`
    },
    system:{
        cronjobs:`${rootAdmin}/system/cron-jobs`
    },
    notifications:{
        root:`${rootAdmin}/notifications`
    }
}


export const appendSerachParams = (key:string,value:string,router:AppRouterInstance,current:URLSearchParams,pathname:string)=>{
    current.set(key,value);
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
}