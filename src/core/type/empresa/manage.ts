type CreateUserRequest = {
    username:string
    email:string
    rol:number
    establecimientos:EstablecimientoUser[]
    empresa_id:number
}

type EstablecimientoUser = {
    uuid:string
    id:number
    name:string
}

type UpdateUserRequest = {
    estado:number
    uuid:string
}