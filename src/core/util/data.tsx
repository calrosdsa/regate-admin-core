import { EstadoVisibility } from "../type/enums";


export const estadoVisibility:SelectItem[] = [
    {
        name:"Habilitado",
        value:EstadoVisibility.ENABLED.toString(),
    },
    {
        name:"Deshabilitado",
        value:EstadoVisibility.DISABLED.toString()
    }
]




export const days = [
    {day:"Domingo",value:0},
    {day:"Lunes",value:1},
    {day:"Martes",value:2},
    {day:"Miercoles",value:3},
    {day:"Jueves",value:4},
    {day:"Viernes",value:5},
    {day:"Sábado",value:6},
]
