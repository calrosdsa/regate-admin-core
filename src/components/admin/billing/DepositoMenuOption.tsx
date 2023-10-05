import MenuLayout from "@/components/util/button/MenuLayout"
import ConfirmationDialog from "@/components/util/dialog/ConfirmationDialog"
import DialogLayout from "@/components/util/dialog/DialogLayout"
import UploadImageDialog from "@/components/util/dialog/UploadImageDialog"
import { UserEstado } from "@/core/type/enums"
import { downloadFile } from "@/core/util"
import { Menu } from "@headlessui/react"
import { ChangeEvent, useState } from 'react'


const DepositoMenuOption = ({
  openUploadDialogComprobante,deposito
}:{
  openUploadDialogComprobante:()=>void
  deposito:Deposito | null
}) =>{

 


  return(
    <>
   
        <MenuLayout>

            <Menu.Item>
                {({ active }) => (
                  <button
                  onClick={()=>openUploadDialogComprobante()}
                  className={`${active ? 'bg-primary text-white' : 'text-gray-900'} 
                   group whitespace-nowrap flex w-full items-center rounded-md px-2 py-2 text-sm
                  `}
                  >
                  Agregar comprobante
                  </button>
                )}
              </Menu.Item>
                {deposito != null &&
              <Menu.Item disabled={deposito.comprobante_url == null}>
                {({ active }) => (
                  <button 
                  onClick={()=>{
                    if(deposito.comprobante_url == null) return
                    downloadFile(deposito.comprobante_url,`comprobante-${deposito.date_paid.slice(0,10)}-${deposito.id}`)
                  }}
                  disabled={deposito.comprobante_url == null}
                  className={`
                 ${active ? 'bg-primary text-white' : 'text-gray-900'}
                 disabled:bg-opacity-50 disabled:text-gray-500 disabled:pointer-events-none
                 group whitespace-nowrap flex w-full items-center rounded-md px-2 py-2 text-sm
                 `}
                  >
                  Descargar comprobante
                  </button>
                )}
              </Menu.Item>
              }
              {/* <Menu.Item>
                {({ active }) => (
                  <button
                  onClick={()=>{}}
                  className={`${active ? 'bg-primary text-white' : 'text-gray-900'}
                   group whitespace-nowrap flex w-full items-center rounded-md px-2 py-2 text-sm
                  ${active ? 'bg-primary text-white' : 'text-gray-900'} 
                  `}
                  >
                     Eliminar usuario
                  </button>
                )}
              </Menu.Item> */}
                </MenuLayout>
        </>
    )
}

export default DepositoMenuOption;