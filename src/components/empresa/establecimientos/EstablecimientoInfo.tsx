import MenuLayout from "@/components/util/button/MenuLayout";
import CommonImage from "@/components/util/image/CommonImage";
import Loader from "@/components/util/loaders/Loader";
import { EstablecimientoEstado } from "@/core/type/enums";

const EstablecimientoInfo = ({data,loading}:{
    data?:EstablecimientoDetail
    loading:boolean
}) => {

    return(
        <div className="w-full shadow-md pt-2">
            <div className="bg-gray-200 w-full p-2 grid">
                <span className="font-medium">Información general sobre la establecimiento </span>
            </div>
            {loading &&
            <Loader
            className="flex justify-center mt-10 pb-10"
            />
            }
            {data != undefined &&
            <div className="border-[1px]  bg-white p-2 sm:p-4">

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 border-b-[1px] pb-2">

            <div className="grid">
            <span className=" subtitle text-base">Nombre de la establecimiento</span>
            <span className="text-sm">{data.establecimiento.name}</span>
            </div>

            {data.establecimiento.email != undefined &&
            <div className="grid">
            <span className=" subtitle text-base">Email</span>
                <span className="subtitle">{data.establecimiento.email}</span>
            </div>
            } 

            <div className="grid">  

            <span className=" subtitle text-base">Estado del establecimiento</span>

            {data.establecimiento.estado == EstablecimientoEstado.ESTABLECIMIENTO_BLOQUEADO &&
            <div className="flex space-x-2 text-gray-600 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
            className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-lg">Bloqueado</span>
            </div>
            }
             {data.establecimiento.estado == EstablecimientoEstado.ESTABLECIMIENTO_PENDIENTE &&
            
            <div className="flex space-x-2 text-gray-600 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
            className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-lg">Verificacion Pendiente</span>
            </div>
            }

            {data.establecimiento.estado == EstablecimientoEstado.ESTABLECIMIENTO_VERIFICADO &&
            <div className="flex space-x-2 text-green-600 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-lg">Verificado
            </span>
            </div>
            }


            </div>

           

          

            {data.establecimiento.phone_number != undefined &&
                <div className="grid">
            <span className=" subtitle text-base">Número de telefono</span>
                <span className="subtitle">{data.establecimiento.phone_number}</span>
            </div>
            }

            {data.establecimiento.address != undefined &&
                <div className="grid">
            <span className=" subtitle text-base">Dirección</span>
                <span onClick={()=>{
                if(data.establecimiento.longitud == undefined && data.establecimiento.latitud == undefined) return
                    const url = 'http://www.google.com/maps/place/' + data.establecimiento.latitud + ',' +
                    data.establecimiento.longitud;
                    window.open(url, '_blank', 'location=yes');
                }}
                className="subtitle underline cursor-pointer">{data.establecimiento.address}</span>
            </div>
            }

                <div className="grid">
            <span className=" subtitle text-base">Visibilidad</span>
                <span onClick={()=>{

                }}
                className=" subtitle">{data.establecimiento.visibility ? "Visible en la aplicación" :"No visible en la aplicación"}</span>
          </div> 

            {data.establecimiento.photo != undefined &&
                <div>
                <CommonImage
                src={data.establecimiento.photo}
                w={250}
                h={200}
                className=" rounded-lg"
                />  
            </div>
            }
            </div>
        </div>

    }

        {/* <span className="text-lg font-medium mt-5   ">Archivos adjuntos</span> */}

        </div>
    )
}

export default EstablecimientoInfo;