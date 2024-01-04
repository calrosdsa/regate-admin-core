"use client"

import ButtonSubmit from "@/components/util/button/ButtonSubmit";
import InputWithIcon from "@/components/util/input/InputWithIcon";
import TextAreaWithMaxLength from "@/components/util/input/TextAreaWithMaxLength";
import { SendNotificationDiffusion } from "@/core/repository/system/notification";
import { TypeEntity } from "@/core/type/enums";
import { FormEvent, useState } from "react";


const Page = () =>{
    const [loading,setLoading] = useState(false)
    const [formData,setFormData] = useState({
        title:"",
        text:"",
        image:""
    })
    const {title,text,image} = formData
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const onChangeTextArea = (e:React.ChangeEvent<HTMLTextAreaElement>) =>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const onSubmit = async(e:FormEvent<HTMLFormElement>)=>{
        try{
            e.preventDefault()
            setLoading(true)
            const request:RequestNotificationDiffusion = {
                categories:[1,2],
                notification:{
                    title:title,
                    content:text,
                    image:image,
                    entity_id:1,
                    type_entity:TypeEntity.ENTITY_ESTABLECIMIENTO
                }
            }
            console.log(request)
            await SendNotificationDiffusion(request)
            setLoading(false)
        }catch(err){
            setLoading(false)
            console.log(err)
        }
    }

    return (
        <div className="p-3">
           <span className="title text-lg">Notificacion</span>
           <div className="xl:grid xl:grid-cols-2">
           <form onSubmit={onSubmit}
            className=" max-w-xs"
           >
            <InputWithIcon
            name="title"
            value={title}
            onChange={onChange}
            label="Titulo de la notificacion"
            />
             <TextAreaWithMaxLength
            name="text"
            value={text}
            onChangeValue={onChangeTextArea}
            label="Imagen de la notificacion"
            placeholder="Ingresa text de la notificacion"
            max={500}
            />
            <InputWithIcon
            name="image"
            value={image}
            required={false}
            onChange={onChange}
            label="Imagen de la notificacion"
            placeholder="Ejemplo: https://tuapp.com/imagen.png"
            />

            <ButtonSubmit
            loading={loading}
            title="Enviar notificacion"
            />
           </form>
            </div>
        </div>
    )
}

export default Page;