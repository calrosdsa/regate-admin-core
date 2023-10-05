import { UserRol } from "@/core/type/enums"
import Loading from "../util/loaders/Loading"


const EmpresaAdministradores = ({loading,administradores}:{
    loading:boolean
    administradores:AdministradorEmpresa[]
}) => {


    return(
        
        <div className=" bg-white">
              <div className="bg-gray-200 w-full p-2 grid">
                <span className="font-medium">Administradores</span>
            </div>
                <Loading
              loading={loading}
              className='pt-2 flex w-full justify-center'
              />
                {administradores.map((item,idx)=>{
                    return(
                        <div onClick={()=>{}} className={`hover:bg-gray-100 p-2 flex justify-between cursor-pointer
                         items-center`} key={idx}>
                            <div className="grid">
                            <span className="subtitle">{item.username}</span>
                            <span className="text-xs">{item.email}</span>
                            </div>
                            {item.rol == UserRol.ADMIN_USER_ROL ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                            className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        }
                        </div>
                    )
                })}
                </div>
    )
}

export default EmpresaAdministradores;