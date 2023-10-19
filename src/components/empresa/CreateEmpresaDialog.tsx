import { useState } from "react";
import DialogLayout from "../util/dialog/DialogLayout";
import InputWithIcon from "../util/input/InputWithIcon";
import ButtonSubmit from "../util/button/ButtonSubmit";
import { CreateEmpresa } from "@/core/repository/empresa/empresa";
import { Empresa } from "@/core/type/empresa/empresa";
import { toast } from "react-toastify";
import { successfulMessage, unexpectedError } from "@/context/config";


const CreateEmpresaDialog = ({open,close,addEmpresa}:{
    open:boolean,
    close:()=>void,
    addEmpresa:(e:Empresa)=>void
})=>{
    const [loading,setLoading] = useState(false)
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        phone_number:""
    })
    const {name,email,phone_number} = formData
    const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    const onSubmit = async(e:React.FocusEvent<HTMLFormElement>)=>{
        try{
            e.preventDefault()
            setLoading(true)
            const res =  await CreateEmpresa(JSON.stringify(formData))
            setLoading(false)
            close()
            addEmpresa(res)
            toast.success(successfulMessage)
        }catch(err){
            setLoading(false)
            toast.error(unexpectedError)
            console.log(err)
        }
    }
    return (
        <>
        <DialogLayout
        allowFullScreen={true}
        className="max-w-lg"
        title="Crear empresa"
        open={open}
        close={close}
        >
            <form onSubmit={onSubmit}>
                <InputWithIcon
                name="name"
                label="Nombre de la empresa"
                value={name}
                onChange={onChange}
                />
                 <InputWithIcon
                name="email"
                label="Email de la empresa"
                value={email}
                onChange={onChange}
                />
                 <InputWithIcon
                name="phone_number"
                label="Numero de telefono"
                value={phone_number}
                onChange={onChange}
                />
                <ButtonSubmit
                loading={loading}
                title="Crear empresa"
                className=""
                />
            </form>
        </DialogLayout>
        </>
    )
}

export default CreateEmpresaDialog;