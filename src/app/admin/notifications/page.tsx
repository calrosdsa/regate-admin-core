"use client"

import InputWithIcon from "@/components/util/input/InputWithIcon";
import TextAreaWithMaxLength from "@/components/util/input/TextAreaWithMaxLength";
import { useState } from "react";


const Page = () =>{
    const [formData,setFormData] = useState({
        title:"",
        text:"",
        image:""
    })
    const {title,text,image} = formData
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setFormData({...formData,[e.target.name]:[e.target.value]})
    }
    const onChangeTextArea = (e:React.ChangeEvent<HTMLTextAreaElement>) =>{
        setFormData({...formData,[e.target.name]:[e.target.value]})
    }
    return (
        <div className="p-3">
           <span className="title text-lg">Notificacion</span>
           <div className="xl:grid xl:grid-cols-2">
           <form >
            <InputWithIcon
            name="title"
            value={title}
            onChange={onChange}
            label="Titulo de la notificacion"
            className=" max-w-xs"
            />
             <TextAreaWithMaxLength
            name="text"
            value={text}
            onChangeValue={onChangeTextArea}
            label="Imagen de la notificacion"
            className="max-w-xs"
            placeholder="Ingresa text de la notificacion"
            max={500}
            />
            <InputWithIcon
            name="image"
            value={image}
            onChange={onChange}
            label="Imagen de la notificacion"
            className="max-w-xs"
            placeholder="Ejemplo: https://tuapp.com/imagen.png"
            />
           </form>
            </div>
        </div>
    )
}

export default Page;