import MenuLayout from "@/components/util/button/MenuLayout";
import { inProgress, successfulMessage, unexpectedError } from "@/context/config";
import { BloquearEstablecimiento, VerificarEstablecimiento } from "@/core/repository/empresa/establecimiento";
import { EstablecimientoEstado } from "@/core/type/enums";
import { Menu } from "@headlessui/react";
import { toast } from "react-toastify";

const EstablecimientoMenu = ({establecimientoId,updateEstado,currentEstado}:{
    establecimientoId:number | undefined
    currentEstado:number | undefined
    updateEstado:(estado:EstablecimientoEstado)=>void
})=>{

    const verificarEstablecimento = async() =>{
        if(establecimientoId == undefined) return
        const id =  toast.loading(inProgress)
        try{
            await VerificarEstablecimiento(establecimientoId)
            updateEstado(EstablecimientoEstado.ESTABLECIMIENTO_VERIFICADO)
            toast.update(id, {render: successfulMessage, type: "success", isLoading: false,autoClose:5000});
        }catch(err){
            toast.update(id, {render: unexpectedError, type: "error", isLoading: false,autoClose:5000});
        }
    }

    const bloquearEstablecimento = async() =>{
        if(establecimientoId == undefined) return
        const id =  toast.loading(inProgress)
        try{
            await BloquearEstablecimiento(establecimientoId)
            updateEstado(EstablecimientoEstado.ESTABLECIMIENTO_BLOQUEADO)
            toast.update(id, {render: successfulMessage, type: "success", isLoading: false,autoClose:5000});
        }catch(err){
            toast.update(id, {render: unexpectedError, type: "error", isLoading: false,autoClose:5000});
        }
    }


    return(
        <div>
            <MenuLayout
            >
                 <Menu.Item
                  disabled={currentEstado == EstablecimientoEstado.ESTABLECIMIENTO_VERIFICADO}>
                {({ active,disabled }) => (
                  <button
                //   disabled={currentEstado == EstablecimientoEstado.ESTABLECIMIENTO_VERIFICADO}
                  onClick={()=>verificarEstablecimento()}
                  className={`${active ? 'bg-primary text-white' : 'text-gray-900'} 
                   group whitespace-nowrap flex w-full items-center rounded-md px-2 py-2 text-sm
                   ${disabled && "disabled"}
                  `}
                  >
                  Cambiar estado a verificado
                  </button>
                )}
              </Menu.Item>
              <Menu.Item 
               disabled={currentEstado == EstablecimientoEstado.ESTABLECIMIENTO_BLOQUEADO}>
                {({ active,disabled }) => (
                  <button
                  onClick={()=>bloquearEstablecimento()}
                  className={`${active ? 'bg-primary text-white' : 'text-gray-900'} 
                   group whitespace-nowrap flex w-full items-center rounded-md px-2 py-2 text-sm
                   ${disabled && "disabled"}
                  `}
                  >
                  Bloquear establecimiento
                  </button>
                )}
              </Menu.Item>
            </MenuLayout>
        </div>
    )
}
export default EstablecimientoMenu;