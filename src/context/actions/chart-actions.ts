import { AnyAction, ThunkAction } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { chartActions } from "../slices/chartSlice"
import { ChartDataResponse, FilterChartData, NameValueData } from "@/core/type/chart"
import { GetChartData, GetReservaAmount, GetReservasHoursAverage, GetReservasHoursData } from "@/core/repository/chart"
import moment from "moment"
import { TypeOfDate } from "@/core/type/enums"

export const getReservasAmountData  = (data:FilterChartData) :ThunkAction<void,RootState,undefined,AnyAction> =>{
    return async(dispatch)=>{
        try{
            dispatch(chartActions.setChartLoading(true))
            const res:NameValueData[] = await GetReservaAmount(data)
            console.log(res)
            const newResevasAmount = res.map(item=>{
                item = {
                  name:moment(item.name).format("ll"),
                  value:item.value,
                  value2:item.value2
                }
                return item
              })
            dispatch(chartActions.setData(newResevasAmount))
            dispatch(chartActions.setChartLoading(false))
        }catch(err){
            dispatch(chartActions.setChartLoading(false))
            console.log(err)
        }
    }
}

export const getReservasHoursAverage  = (data:FilterChartData) :ThunkAction<void,RootState,undefined,AnyAction> =>{
    return async(dispatch)=>{
        try{
            dispatch(chartActions.setChartLoading(true))
            const res:NameValueData[] = await GetReservasHoursAverage(data)
            console.log(res,data)
            let newReservaAverage:NameValueData[] = []
            switch(data.type_date){
                case TypeOfDate.hour:
                newReservaAverage = res.map(item=>{
                    item = {
                        name:moment(hours[Number(item.name)].hour).utc().format("LT"),
                        value:(item.value/2),
                        date:hours[Number(item.name)].hour.toUTCString(),
                    }
                    return item
                })
                break;
                case TypeOfDate.day:
                    newReservaAverage = res.map(item=>{
                        item = {
                            name:days[Number(item.name)].day,
                            value:(item.value/2)
                        }
                        return item
                    })
                    break;
                    case TypeOfDate.month:
                        newReservaAverage = res.map((item,idx)=>{
                        console.log(item.name,item.value,idx)
                        item = {
                            name:months[idx].month,
                            value:(item.value/2)
                        }
                        console.log(item.name,item.value,"//2")

                        return item
                      }) 
                      newReservaAverage = newReservaAverage.filter(item=>item.name != "")
                      console.log(newReservaAverage)
                break;                               
            }
            dispatch(chartActions.setData(newReservaAverage))
            dispatch(chartActions.setChartLoading(false))
        }catch(err){
            dispatch(chartActions.setChartLoading(false))
            console.log(err)
        }
    }
}

export const getReservasHoursData  = (data:FilterChartData) :ThunkAction<void,RootState,undefined,AnyAction> =>{
    return async(dispatch)=>{
        try{
            dispatch(chartActions.setChartLoading(true))
            const res:NameValueData[] = await GetReservasHoursData(data)
            const newResevasCountHours = res.map(item=>{
                item = {
                  name:moment(item.name).format("ll"),
                  value:(item.value/2)
                }
                return item
              })
            dispatch(chartActions.setData(newResevasCountHours))
            dispatch(chartActions.setChartLoading(false))
        }catch(err){
            dispatch(chartActions.setChartLoading(false))
            console.log(err)
        }
    }
}

export const getChartData  = (data:FilterChartData) :ThunkAction<void,RootState,undefined,AnyAction> =>{
    return async(dispatch)=>{
        try{
            dispatch(chartActions.setChartLoading(true))
            const res:ChartDataResponse = await GetChartData(data)
            const newResevasCountHours = res?.reserva_count_hours.map(item=>{
                item = {
                  name:moment(item.name).format("ll"),
                  value:(item.value/2)
                }
                return item
              })
              const newResevasAmount = res?.reserva_amount.map(item=>{
                item = {
                  name:moment(item.name).format("ll"),
                  value:item.value,
                  value2:item.value2
                }
                return item
              })
              const newReservaDayAverage = res?.reserva_day_average.map(item=>{
                item = {
                    name:days[Number(item.name)].day,
                    value:(item.value/2)
                }
                return item
              })
              const newReservaHourAverage = res.reserva_hour_average.map(item=>{
                item = {
                    name:moment(hours[Number(item.name)].hour).utc().format("LT"),
                    value:(item.value/2),
                    date:hours[Number(item.name)].hour.toUTCString(),
                }
                return item
              })
              console.log(res)
             const newResponse:ChartDataResponse = {
                reserva_count_hours:newResevasCountHours,
                reserva_day_average:newReservaDayAverage,
                reserva_hour_average:newReservaHourAverage,
                reserva_amount:newResevasAmount
             } 
            dispatch(chartActions.setDataResponse(newResponse))
            dispatch(chartActions.setChartLoading(false))
        }catch(err){
            dispatch(chartActions.setChartLoading(false))
            console.log(err)
        }
    }
}


const months = [
    {month:"",value:0},
    {month:"Enero",value:1},
    {month:"Febrero",value:2},
    {month:"Marzo",value:3},
    {month:"Abril",value:4},
    {month:"Mayo",value:5},
    {month:"Junio",value:6},
    {month:"Julio",value:7},
    {month:"Agosto",value:8},
    {month:"Septiembre",value:9},
    {month:"Octubre",value:10},
    {month:"Noviembre",value:11},
    {month:"Diciembre",value:12},

]

const days = [
    {day:"Domingo",value:0},
    {day:"Lunes",value:1},
    {day:"Martes",value:2},
    {day:"Miercoles",value:3},
    {day:"Jueves",value:4},
    {day:"Viernes",value:5},
    {day:"Sábado",value:6},
]

const hours = [
    {hour:new Date('2011-04-11T00:00:00Z'),value:0},
    {hour:new Date('2011-04-11T01:00:00Z'),value:1},
    {hour:new Date('2011-04-11T02:00:00Z'),value:2},
    {hour:new Date('2011-04-11T03:00:00Z'),value:3},
    {hour:new Date('2011-04-11T04:00:00Z'),value:4},
    {hour:new Date('2011-04-11T05:00:00Z'),value:5},
    {hour:new Date('2011-04-11T06:00:00Z'),value:6},
    {hour:new Date('2011-04-11T07:00:00Z'),value:7},
    {hour:new Date('2011-04-11T08:00:00Z'),value:8},
    {hour:new Date('2011-04-11T09:00:00Z'),value:9},
    {hour:new Date('2011-04-11T10:00:00Z'),value:10},
    {hour:new Date('2011-04-11T11:00:00Z'),value:11},
    {hour:new Date('2011-04-11T12:00:00Z'),value:12},
    {hour:new Date('2011-04-11T13:00:00Z'),value:13},
    {hour:new Date('2011-04-11T14:00:00Z'),value:14},
    {hour:new Date('2011-04-11T15:00:00Z'),value:15},
    {hour:new Date('2011-04-11T16:00:00Z'),value:16},
    {hour:new Date('2011-04-11T17:00:00Z'),value:17},
    {hour:new Date('2011-04-11T18:00:00Z'),value:18},
    {hour:new Date('2011-04-11T19:00:00Z'),value:19},
    {hour:new Date('2011-04-11T20:00:00Z'),value:20},
    {hour:new Date('2011-04-11T21:00:00Z'),value:21},
    {hour:new Date('2011-04-11T22:00:00Z'),value:22},
    {hour:new Date('2011-04-11T23:00:00Z'),value:23},
]