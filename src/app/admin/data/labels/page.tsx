"use client"
import EditComponent from "@/components/util/input/EditComponent";
import Loading from "@/components/util/loaders/Loading";
import { a11yProps } from "@/components/util/tab";
import CustomTabPanel from "@/components/util/tab/CustomTabPanel";
import { GetAmenities, GetCategories, GetRules, GetSports } from "@/core/repository/labels";
import useEffectOnce from "@/core/util/hooks/useEffectOnce";
import { Box, CircularProgress, InputAdornment, Tab, Tabs, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";


const Page = () =>{
    const [categories,setCategories] = useState<Label[]>([])
    const [rules,setRules] = useState<Label[]>([])
    const [amenities,setAmenities] = useState<Label[]>([])
    const [sports,setSports] = useState<Label[]>([])
    const [loading,setLoading] = useState(false)

    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
      switch(newValue){
            case 0:
                getSports()
            break;
            case 1:
                getCategories()
            break;
            case 2:
                getAmenities()
            break;
            case 3:
                getRules()
            break;
      }
    };

    const getCategories = async() =>{
        try{
            setLoading(true)
            const res:Label[] = await GetCategories()
            setCategories(res)
            setLoading(false)
        }catch(err){
            setLoading(false)
            console.log(err)
        }
    }
    const getSports = async() =>{
        try{
            setLoading(true)
            const res:Label[] = await GetSports()
            setSports(res)
            setLoading(false)
        }catch(err){
            setLoading(false)
            console.log(err)
        }
    }
    const getAmenities = async() =>{
        try{
            setLoading(true)
            const res:Label[] = await GetAmenities()
            setAmenities(res)
            setLoading(false)
        }catch(err){
            setLoading(false)
            console.log(err)
        }
    }
    const getRules = async() =>{
        try{
            setLoading(true)
            const res:Label[] = await GetRules()
            setLoading(false)
            setRules(res)
        }catch(err){
            setLoading(false)
            console.log(err)
        }
    }

    useEffectOnce(()=>{
        getSports()
    })
    return (
        <div>
           <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Deportes" {...a11yProps(0)} />
                <Tab label="Categories Deporte" {...a11yProps(1)} />
                <Tab label="Comodidades" {...a11yProps(2)} />
                <Tab label="Reglas" {...a11yProps(3)} />
            </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
           <Loading
           className="flex justify-center w-full"
           loading={loading}
           />

            {sports.map((item,key)=>{
                return(
                    <div key={key}>
                          <TextField
                            id="input-with-icon-textfield"
                            label="TextField"
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <AccountCircle />
                                </InputAdornment>
                            ),
                            }}
                            value={item.name}
                            variant="standard"
                        />
                    </div>
                )
            })}

            

            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
            <Loading
           className="flex justify-center w-full"
           loading={loading}
           />
            {JSON.stringify(categories)}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
            <Loading
           className="flex justify-center w-full"
           loading={loading}
           />
            {JSON.stringify(amenities)}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
            <Loading
           className="flex justify-center w-full"
           loading={loading}
           />
            {JSON.stringify(rules)}
            </CustomTabPanel>
        </div>
    )
}



export default Page;