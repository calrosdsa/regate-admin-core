import { Dna } from "react-loader-spinner"
import Loading from "./Loading"
import { CircularProgress } from "@mui/material"

interface Props{
    className?:string
}
const Loader = ({className =''}:Props) =>{

    return(
        <div className={`${className}`}>
            <div className="flex space-x-2 items-center">
            <div role="status">
            <CircularProgress />
       
                </div>
        <span>Cargando</span>
            </div>
            {/* <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            /> */}
        </div>
    )
}

export default Loader