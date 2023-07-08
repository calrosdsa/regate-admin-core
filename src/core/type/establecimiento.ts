type EstablecimientoDetail = {
    establecimiento:Establecimiento
    setting_establecimiento:SettingEstablecimiento
}

type Establecimiento = {
    id:number
    uuid:string
    address:string
    phone_number:string
    email:string
    created_at:string
    longitud:string
    latitud:string
    name:string
    photo:string
    portada:string
}


type Place = {
    features:Feature[]
    query:number[]
}

type Feature = {
    place_name:string
    text:string
}