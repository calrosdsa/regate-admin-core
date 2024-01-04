import { CircularProgress } from "@mui/material"

const Loading = ({loading,title = "Cargando",className = ""}:{
    loading:boolean
    title?:string
    className?:string
}) =>{

    return(
        <>
        {loading &&
        <div className={`${className}`}>
        <div className="flex space-x-2 items-center">
            <CircularProgress 
            size={20} 
            thickness={4}
            />
            <span>{title}</span>
            </div>
        </div>
        }
        </>
    )
}

export default Loading;