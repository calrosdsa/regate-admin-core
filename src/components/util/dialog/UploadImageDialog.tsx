

import ButtonWithLoader from "@/components/util/button/ButtonWithLoader"
import ConfirmationDialog from "@/components/util/dialog/ConfirmationDialog"
import DialogLayout from "@/components/util/dialog/DialogLayout"
import CommonImage from "@/components/util/image/CommonImage"
import InputWithIcon from "@/components/util/input/InputWithIcon"
import SearchInput from "@/components/util/input/SearchInput"
import Loading from "@/components/util/loaders/Loading"
import { unexpectedError } from "@/context/config"
import { GetUsersEmpresa } from "@/core/repository/empresa/manage"
import { CancelReserva } from "@/core/repository/reservas"
import { SearchUsersEmpresa } from "@/core/repository/users"
import { ChangeEvent, useState } from "react"
import { toast } from "react-toastify"
import UploadImage from "../input/UploadImage"


const UploadImageDialog = ({open,close,setFile,isFile,uploadComprobante,src}:{
    open:boolean
    close:()=>void
    setFile:(e:File)=>void
    src:string | null | undefined
    isFile:boolean
    uploadComprobante:()=>void
}) =>{
    return(
        <>
        {/* {openConfirmationDialog &&
        <ConfirmationDialog
        open={openConfirmationDialog}
        close={()=>setOpenConfirmationDialog(false)}
        description="Al cancelar la reserva, se notificará al usuario que su reserva
        ha sido cancelada y se le reembolsará el monto gastado."
        performAction={()=>{
            setOpenConfirmationDialog(false)
            // cancelarReserva()
        }}
        />
        } */}
        <DialogLayout
        open={open}
        close={close}
        title="Agregar comprobante"
        className="max-w-lg"
        >
            <div className="pt-1">
            <div className="pt-2 w-full">
           <UploadImage
           setFile={(e)=>setFile(e)}
           width="w-full"
           src={src}
           />
            </div>

            <div className="pt-7 flex justify-end">
            <button onClick={()=>uploadComprobante()}
            disabled={isFile == false} className={`button disabled:bg-opacity-50 disabled:pointer-events-none`}>Confirmar</button>
            </div>

            </div>
        </DialogLayout>
        </>
    )
}

export default UploadImageDialog;