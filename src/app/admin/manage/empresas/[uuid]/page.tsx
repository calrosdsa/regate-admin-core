"use client"
import EmpresaAdministradores from "@/components/empresa/EmpresaAdministradores"
import EmpresaDetail from "@/components/empresa/EmpresaDetail"
import EstablecimientosTable from "@/components/empresa/establecimientos/EstablecimientosTable"
import CreateUserNegocioDialog from "@/components/manage/users/CreateUserNegocioDialog"
import Loading from "@/components/util/loaders/Loading"
import { GetEmpresa } from "@/core/repository/empresa/empresa"
import { GetEstablecimientosEmpresa } from "@/core/repository/empresa/establecimiento"
import { GetUsersEmpresa } from "@/core/repository/empresa/manage"
import { Empresa } from "@/core/type/empresa/empresa"
import { UserRol } from "@/core/type/enums"
import { adminRoutes } from "@/core/util/routes"
import { Tab } from "@headlessui/react"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"


const Page = ({ params }:{ params:{uuid:string}}) =>{
    const searchParams = useSearchParams();
    const name = searchParams.get("name")
    const tabIndex = searchParams.get("tabIndex")
    const pathname = usePathname();
    const current = new URLSearchParams(Array.from(searchParams.entries()))
    const router = useRouter()
    const [loadingEmpresa,setLoadingEmpresa] = useState(false)
    const [openDialogCreateUser,setOpenDialogCreateUser] = useState(false)
    const [loadingEstablecimientos,setLoadingEstablecimientos] = useState(false)
    const [loadingAdministradores,setLoadingAdministradores] = useState(false)
    const [empresa,setEmpresa] = useState<Empresa | undefined>(undefined)
    const [administradores,setAdministradores] = useState<AdministradorEmpresa[]>([])
    const [establecimientos,setEstablecimientos] = useState<Establecimiento[]>([])
    const appendSerachParams = (key:string,value:string)=>{
        current.set(key,value);
        const search = current.toString();
        const query = search ? `?${search}` : "";
        router.push(`${pathname}${query}`);
    }
    const getEmpresa = async() =>{
        try{
            setLoadingEmpresa(true)
            const res:Empresa = await GetEmpresa(params.uuid)
            setEmpresa(res)
            setLoadingEmpresa(false)
        }catch(err){
            setLoadingEmpresa(false)
            console.log(err)
        }
    }

    const getEstablecimientos = async() => {
        try{
            setLoadingEstablecimientos(true)
            const res:Establecimiento[] = await GetEstablecimientosEmpresa(params.uuid)
            setEstablecimientos(res)
            setLoadingEstablecimientos(false)
        }catch(err){
            setLoadingEstablecimientos(false)
            console.log(err)
        }
    }

    const getAdministradoresEmpresa = async() =>{
        try{
            if(empresa == undefined) return
            setLoadingAdministradores(true)
            console.log(empresa.id)
            const res = await GetUsersEmpresa(empresa.id)
            setAdministradores(res)
            console.log(res)
            setLoadingAdministradores(false)
        }catch(err){
            setLoadingAdministradores(false)
            console.log(err)
        }
    }
    useEffect(()=>{
        if(empresa != undefined){
            getAdministradoresEmpresa()
        }
    },[empresa])
    useEffect(()=>{
        if(empresa == undefined){
            getEstablecimientos()
            getEmpresa()
        }
    },[])

    return (
        <>
        <div className="">
            {/* {JSON.stringify(empresa)} */}

            <div className="flex space-x-2 items-center">
                {/* <Link href={""} className="link">Administrar</Link> */}
                <span className="text-sm text-gray-600 font-semibold noSelect">Administrar</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                 className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                <Link href={adminRoutes.manage.empresas} 
                className="link">Empresas</Link>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                 className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                <span className="text-sm text-gray-600 font-semibold noSelect">{name}</span>
            </div>

            <Tab.Group defaultIndex={tabIndex != null ? Number(tabIndex):0}>
                <Tab.List className={" sticky top-0 bg-gray-50  w-full z-10 py-3"}>
                <Tab className={({ selected }) => `tab ${selected && "tab-enabled"}`}
                    onClick={()=>{
                        appendSerachParams("tabIndex","0")
                        
                        // getData()
                        }}>Info</Tab>
                
                    <Tab className={({ selected }) => `tab ${selected && "tab-enabled"}`}
                    onClick={()=>{
                        appendSerachParams("tabIndex","2")
                        // getData()
                        }}>Establecimiento</Tab>
                
                    {/* <Tab className={({ selected }) => `tab ${selected && "tab-enabled"}`}
                    onClick={()=>{      
                        appendSerachParams("tabIndex","2")
                    }}>Reservas</Tab> */}
                </Tab.List>


                <Tab.Panels className={""}>
                <Tab.Panel className={"w-full"}>
                <div>
                <EmpresaDetail
                loading={loadingEmpresa}
                empresa={empresa}
                />
                <div className="h-4"/>
                <button onClick={()=>setOpenDialogCreateUser(true)}
                className="button w-min flex space-x-2 whitespace-nowrap">
                    <span>Agregar usuario</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
                    stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
            </svg>
                    </button>
                <div className=" grid  md:grid-cols-2 mt-2">

                <EmpresaAdministradores
                loading={loadingAdministradores}
                administradores={administradores}
                />

                </div>
               
            </div>
                  
                </Tab.Panel>

                <Tab.Panel className={"w-full"}>
                    <EstablecimientosTable
                    establecimientos={establecimientos}
                    loading={loadingEstablecimientos}
                    empresaUuid={params.uuid}
                    empresaName={empresa?.name || ""}
                    />
                </Tab.Panel>


                </Tab.Panels>
                </Tab.Group>

          

        </div>
        {(openDialogCreateUser && empresa != undefined) &&
        <CreateUserNegocioDialog
        openModal={openDialogCreateUser}
        closeModal={()=>setOpenDialogCreateUser(false)}
        refreshUsers={()=>getAdministradoresEmpresa()}
        empresaId={empresa.id}
        />
    }
    </>
    )
}

export default Page;