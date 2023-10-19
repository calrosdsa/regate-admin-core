import moment from "moment"
import { useState } from "react"

const AttentionScheduleComponent = ({attention_schedue_week}:{
    attention_schedue_week:AttentionSchedule[]
}) =>{

    return(
        <>
      
        <div className=" grid gap-y-2 max-w-lg">
            {/* {JSON.stringify(attention_schedue_week)} */}
            {attention_schedue_week.map((item,index)=>{
                return(
                    <div key={index} className="flex w-full justify-between items-center">
                        <span className="">{item.day_name}</span>

                        <div className="flex space-x-2 items-center">
                            {(!item.open &&!item.closed && item.schedule_interval.length > 0 )&&
                                    <div className="grid">
                                    {item.schedule_interval.map((item,index)=>{
                                        return(
                                            <span className="text-sm"
                                            key={index}>{item.start_time.slice(0,5)} - {item.end_time.slice(0,5)}</span>
                                            )
                                        })}
                                        </div>
                            }
                            {item.closed &&
                                <span className="text-sm">Cerrado</span>
                            }    
                            {item.open &&
                                <span className="text-sm">Abierto las 24 horas</span>
                            }    
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                        className="icon-button noSelect">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                      </svg>
                            </div>
                    </div>
                )
            })}
        </div>
    </>
    )
}

export default AttentionScheduleComponent;