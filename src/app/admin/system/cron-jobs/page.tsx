"use client"
import Loading from '@/components/util/loaders/Loading';
import { GetCronJobs } from '@/core/repository/system/cronjob';
import useEffectOnce from '@/core/util/hooks/useEffectOnce';
// const cronstrue = require('cronstrue');
import cronstrue from 'cronstrue/i18n';
import { useState } from 'react';
const Page = () =>{
    const [cronJobs,setCronJobs] = useState<Cronjob[]>([])
    const [loading,setLoading] = useState<boolean>(false)
    const getCronJobs = async() =>{
        try{
            setLoading(true)
            const res:Cronjob[] = await GetCronJobs()
            setCronJobs(res)
            setLoading(false)
        }catch(err){
            setLoading(false)
            console.log(err)
        }
    }

    useEffectOnce(()=>{
        getCronJobs()
    })


    return(
        <div className='p-2'>
            <span className="text-xl font-medium">Cron Jobs
              <span className="text-xl text-gray-500  font-normal">({cronJobs.length})</span></span>
             <div className={`pt-4  relative ${loading && "h-20"}`}>
            <Loading
            loading={loading}
            className=" absolute top-12 left-1/2 -translate-x-1/2"
            />
            <table className="w-full  text-left">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
            <tr>
            <th scope="col" className="headerTable ">
                </th>
                <th scope="col" className="headerTable">
                    Descripcion
                </th>
                <th scope="col" className="headerTable ">
                    Expression
                </th>
                <th scope="col" className="headerTable ">
                    Tag
                </th>
                <th scope="col" className="headerTable ">
                </th>
            </tr>
        </thead>
        <tbody>
            {cronJobs.map((item,index)=>{
                return(
                    <tr key={index} className={`${index % 2 && "bg-gray-100"}`}>
                        <td>{index + 1}.-</td>
                <td scope="row" className="px-2 text-sm">                   
                    {item.name}
                </td>
                <td className="rowTable">
                    ({item.expression}) {cronstrue.toString(item.expression)}
                </td>
                <td scope="row" className="rowTable">                   
                    {item.tag}
                </td>
                <td>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z" clipRule="evenodd" />
                </svg>
                </td>
            </tr>
       )})}
           
        </tbody>
    </table>
            </div>

        </div>
    )
}

export default Page;