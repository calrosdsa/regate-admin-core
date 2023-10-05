import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import CommonImage from "../image/CommonImage";
import ButtonWithLoader from "../button/ButtonWithLoader";

const UploadImage = ({setFile,src,save,id="file",width="w-44",height="h-44"}:{
    setFile:(e:File)=>void
    src:string | null | undefined
    width?:string
    height?:string
    save?:(setLoading:(e:boolean)=>void)=>void
    id?:string
}) => {
    const [loading,setLoading] = useState(false)
    const [source,setSource] = useState("")
    const [nameFile,setNameFile] = useState("")
    const uploadImage = (e:ChangeEvent<HTMLInputElement>)=>{     
        if(e.target.files?.length != undefined){
            const file = e.target.files[0]
            setNameFile(file.name)
            setFile(file)
            const fileUrl = URL.createObjectURL(file)
            setSource(fileUrl)
        }
    }
    useEffect(()=>{
        if(src != "" && src != null){
            setSource(src as string)
        }else{
            setSource("/images/img-default.png")
        }
    },[src])
    return(
        <div className="grid place-items-center ">


              
            <div className="w-full h-44">
            <CommonImage
            src={source.includes("https") ? `${source}?${Date.now()}` : source}
            w={250}
            h={200}
            className={`${width} ${height} rounded object-contain`}
            alt={nameFile}
            />
            </div>

            <div className="flex justify-between w-max mt-2 sm:w-max sm:grid sm:gap-y-2">
            <label htmlFor={id} className="button-inv ">
                Upload File
            <input id={id} className="hidden" type="file" onChange={uploadImage}/>
            </label>
            {save != undefined &&
            <ButtonWithLoader
            onClick={()=>save((e)=>setLoading(e))}
            title="Guardar"
            className=""
            loading={loading}
            />
            }
            </div>
        </div>
    )
}

// 854c0252-726f-4928-b099-68bfa37838d1
// 1469058c-6084-4e1e-a191-de1d5fa3b9c5

export default UploadImage;