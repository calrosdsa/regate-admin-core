import moment from "moment";
import { getFullName } from "@/core/util";
import { EstablecimientoEstado, Order, OrderQueue, ReservaEstado } from "@/core/type/enums";
import Loading from "@/components/util/loaders/Loading";
import Link from "next/link";
import { adminRoutes } from "@/core/util/routes";

export const getEstadoEstablecimiento = (estado:EstablecimientoEstado)=>{
    switch(estado){
        case EstablecimientoEstado.ESTABLECIMIENTO_PENDIENTE:
            return "Verificación pendiente"
        case EstablecimientoEstado.ESTABLECIMIENTO_VERIFICADO:
            return "Verificado"
    }
}

const EstablecimientosTable = ({establecimientos,loading,empresaUuid,empresaName}:{
    establecimientos:Establecimiento[]
    loading:boolean
    empresaUuid:string
    empresaName:string
}) =>{
    

    return(
        <div className={`relative ${loading && "h-20"}`}>
            <Loading
            loading={loading}
            className="absolute top-12 left-1/2 -translate-x-1/2"
            />
             <table className="w-full shadow-xl">
        <thead className=" bg-gray-200 text-left noselect">
            <tr>
                <th className="headerTable w-10">
                </th>
                <th className="headerTable w-72">
                    Nombre
                </th>
                <th className="headerTable">
                    {/* Precio Total */}
                </th>
                <th className="headerTable">
                    Visibilidad
                </th>
                <th className="headerTable">
                    Estado
                </th>
            
                <th className="headerTable">
                </th>
            </tr>
        </thead>
        <tbody>
        {establecimientos.map((item,index)=>{
                return(
                    <tr key={item.id} className={`${index % 2 && "bg-gray-100"}`}>
                        <td className="rowTable font-medium">{index + 1}.-</td>
                        <td className="flex space-x-2 items-center rowTable ">
                        <span className="rowTable truncate ">{item.name}</span>
                        </td>
                        <td className="rowTable"></td>
                        <td className="rowTable">{item.visibility ? "Visible en la aplicación" :"No visible en la aplicación"}</td>
                        <td className={`rowTable font-semibold
                        ${item.estado == EstablecimientoEstado.ESTABLECIMIENTO_PENDIENTE && "text-gray-600"}
                        ${item.estado == EstablecimientoEstado.ESTABLECIMIENTO_PENDIENTE && "text-green-600"}
                        `}>{getEstadoEstablecimiento(item.estado)}</td>
                        <td 
                        className="rowTable font-medium underline text-primary cursor-pointer">
                            <Link href={`${adminRoutes.manage.empresas}/${empresaUuid}/${item.uuid}?name=${empresaName}&eName=${item.name}`}>
                            Ver
                            </Link>
                            </td>
                    </tr>
                )
            })}

            
           
          
            {/* {data.map((item)=>{
                return(
            <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <Link href={`./establecimiento/${item.uuid}`}>
                    {item.name}
                    </Link>
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
            </tr>
       )})} */}

        </tbody>
    </table>
           
           
        </div>
    )   
}

export default EstablecimientosTable;