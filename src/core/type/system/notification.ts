type NotificationDto = {
    title:string
    content:String
    type_entity:number
    entity_id:number
    image:string
}

type RequestNotificationDiffusion = {
    notification:NotificationDto
    categories:number[]
}