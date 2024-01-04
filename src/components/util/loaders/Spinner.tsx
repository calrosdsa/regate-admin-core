import { Dna } from "react-loader-spinner"
import Loading from "./Loading"
import { CircularProgress } from "@mui/material"

interface Props{
    className?:string
}
const Spinner = ({className =''}:Props) =>{

    return(
        <div className={`${className}`}>
            <div role="status">
            <CircularProgress />
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

export default Spinner;