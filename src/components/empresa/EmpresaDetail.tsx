import { Empresa, EmpresaEstado } from "@/core/type/empresa/empresa";
import Loader from "../util/loaders/Loader";

const EmpresaDetail = ({empresa,loading}:{
    empresa?:Empresa
    loading:boolean
}) => {

    return(
        <div className="w-full shadow-md pt-2">


            <div className="bg-gray-200 w-full p-2 grid">
                <span className="font-medium">Información general sobre la empresa </span>
            </div>
            {loading &&
            <Loader
            className="flex justify-center mt-10 pb-10"
            />
            }
            {empresa != undefined &&
            <div className="border-[1px]  bg-white p-2 sm:p-4">

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 border-b-[1px] pb-2">

            <div className="grid">
            <span className=" subtitle text-base">Nombre de la empresa</span>
            <span className="text-sm">{empresa.name}</span>
            </div>

            {empresa.email != undefined &&
            <div className="grid">
            <span className=" subtitle text-base">Email</span>
                <span className="subtitle">{empresa.email}</span>
            </div>
            } 


            {empresa.estado == EmpresaEstado.EMPRESA_ESTADO_INACTIVE &&
            <div className="grid">                
            <span className=" subtitle text-base">Estado de la empresa</span>
            <div className="flex space-x-2 text-gray-600 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
            className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-lg">Deshabilitado</span>
            </div>
            </div>
            }

            {empresa.estado == EmpresaEstado.EMPRESA_ESTADO_ACTIVE &&
            <div className="grid gap-y-1">                
            <span className=" subtitle text-base">Estado de la empresa</span>
            <div className="flex space-x-2 text-green-600 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-lg">Habilitado
            </span>
            </div>
            </div>
            }

            {empresa.phone_number != undefined &&
                <div className="grid">
            <span className=" subtitle text-base">Número de telefono</span>
                <span className="subtitle">{empresa.phone_number}</span>
            </div>
            }

            {empresa.address != undefined &&
                <div className="grid">
            <span className=" subtitle text-base">Dirección</span>
                <span onClick={()=>{
                if(empresa.longitud == undefined && empresa.latitud == undefined) return
                    const url = 'http://www.google.com/maps/place/' + empresa.latitud + ',' + empresa.longitud;
                    window.open(url, '_blank', 'location=yes');
                }}
                className="subtitle underline cursor-pointer">{empresa.address}</span>
            </div>
            }


            </div>


          

        </div>

    }

        {/* <span className="text-lg font-medium mt-5   ">Archivos adjuntos</span> */}

        </div>
    )
}

export default EmpresaDetail;