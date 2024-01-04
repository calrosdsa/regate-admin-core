import { ChangeEvent } from "react"


const TextAreaWithMaxLength = ({max,value,onChangeValue,label,name,className,placeholder}:{
    max:number
    value:string
    name:string
    label:string
    onChangeValue:(e:ChangeEvent<HTMLTextAreaElement>)=>void
    className?:string
    placeholder?:string
}) =>{

    return (
        <div className={`relative ${className} mt-3`}>
           <div>
            <span className="label">{label}</span>
            <textarea  onChange={onChangeValue} className="textarea" value={value}
            placeholder={placeholder}
            name={name} />
          </div>
        <span className="help-text absolute right-1">{`${value.length}/${max}`}</span>
        </div>
    )
}

export default TextAreaWithMaxLength;