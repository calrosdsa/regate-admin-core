"use client"
import EstablecimientoInfo from "@/components/empresa/establecimientos/EstablecimientoInfo";
import Amenity from "@/components/labels/amenities/Amenity";
import { getEstablecimiento } from "@/core/repository/empresa/establecimiento";
import { GetAmenitiesEstablecimiento, GetRulesEstablecimiento } from "@/core/repository/labels";
import { getIntervaloString, getPaymentMethod } from "@/core/util/converter";
import { adminRoutes } from "@/core/util/routes";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = ({ params }: { params: { uuid:string,eUuid: string } }) =>{
    const searchParams = useSearchParams();
    const name = searchParams.get("name")
    const eName = searchParams.get("eName")
    const tabIndex = searchParams.get("tabIndex")
    const pathname = usePathname();
    const current = new URLSearchParams(Array.from(searchParams.entries()))
    const router = useRouter()
    const [loadingEstablecimiento,setLoadingEstablecimiento] = useState(false)
    const [data,setData] = useState<EstablecimientoDetail | undefined>(undefined)
    const [amenitiesEstablecimiento,setAmenitiesEstablecimiento ] = useState<Label[]>([])
    const [rulesEstablecimiento,setRulesEstablecimiento] = useState<Label[]>([])
    // const [amenities,setAmenities] = useState<Label[]>([])
    // const [rules,setRules] = useState<Label[]>([])

    const getEstablecimientoAmenities = async(id:number) =>{
        const res:Label[] = await GetAmenitiesEstablecimiento(id)
        setAmenitiesEstablecimiento(res)
    }
    const getEstablecimientoRules = async(id:number) =>{
        const res:Label[] = await GetRulesEstablecimiento(id)
        setRulesEstablecimiento(res)
    }
    const getEstablecimientoDetail = async() =>{
        try{
            const res:EstablecimientoDetail =await getEstablecimiento(params.eUuid)
            console.log(res)
            getEstablecimientoAmenities(res.establecimiento.id)
            getEstablecimientoRules(res.establecimiento.id)
            setData(res)

        }catch(err){
            console.log(err)
        }
        // console.log(data)
    }

    useEffect(()=>{
        if(data == undefined){
            getEstablecimientoDetail()
        }
    },[])

    return(
        <div className="">
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
                <Link href={`${adminRoutes.manage.empresas}/${params.uuid}?name=${name}`} 
                className="link">{name}</Link>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                 className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                <span className="text-sm text-gray-600 font-semibold noSelect">{eName}</span>
            </div>

            <div className="pt-5">
                <EstablecimientoInfo
                data={data}
                loading={loadingEstablecimiento}
                />


            {data?.setting_establecimiento != undefined &&   
                <div className="px-1 grid gap-y-2 mt-3">

            <span className="text-xl py-2 font-medium">Establecimiento Ajustes</span>

                <div>
                <span className=' text-base font-medium'>Metodo de pago</span>
            <div className='flex flex-wrap gap-3 mt-3'>   
            {data?.setting_establecimiento.paid_type != null &&
            data?.setting_establecimiento.paid_type.map((item)=>{
                return(
                    <span key={item} className='card w-min whitespace-nowrap'>{getPaymentMethod(item)}</span>
                )
            })}
            </div>
                </div>    

                {data?.setting_establecimiento.paid_type != null &&
             <div className="grid gap-y-3">
             <span className=' text-base font-medium'>Porcentaje para recervar una cancha</span>
             <span className="card w-min">{data?.setting_establecimiento.payment_for_reservation}%</span>
                </div>   
            }


               <div>
                <span className=' text-base font-medium'>Intervalos de Tiempo para Reservar</span>
            <div className='flex flex-wrap gap-3 mt-3'>
            {data?.setting_establecimiento.horario_interval.sort((a,b)=>a.minutes-b.minutes).map((item)=>{
                return(
                    <div key={item.minutes} className='card'>
                        <span className=' text-base font-medium'>{getIntervaloString(item.minutes)}</span>
                    </div>
                )
            })}
            </div>
            </div>     

                <div>
                    <div className=' text-base font-medium'>Comodidades</div>
                    <div className='flex flex-wrap gap-3 pt-2'>
                    {amenitiesEstablecimiento.map((item)=>{ return <Amenity key={item.id} item={item}/>})}
                    </div>
                </div>

                    <div className="">
                    <div className=' text-base font-medium'>Reglas</div>
                    {rulesEstablecimiento.map((item)=>{
                    return(
                        <li key={item.id} className='ml-4 py-1'>{item.name}</li>
                        )
                    })}
                    </div>
                </div>
    }

            </div>

        </div>
    )
}

export default Page;