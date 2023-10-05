export type Empresa = {
    id:number
    uuid:string
    name:string
    created_at:string
    estado:EmpresaEstado
    phone_number?:string
    email?:string
    address?:string
    longitud?:string
    latitud?:string
}

export enum EmpresaEstado {
    ALL,
    EMPRESA_ESTADO_ACTIVE,
    EMPRESA_ESTADO_INACTIVE
}

