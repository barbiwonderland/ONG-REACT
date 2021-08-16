import React, { useEffect, useState } from 'react'
import {getOrganization} from "../services/organizationService"
import {Link} from "react-router-dom"

export default function BackofficeOrganizationScreen() {

    const [data,setData]=useState(null)
    

    async function displayData(mounted){
        
        try{
            const call = await getOrganization;
            const res= await call.data
            if(res.data[0] && mounted){
                
                setData(
                <div className="d-flex align-items-center flex-column mt-4 p-4" style={{backgroundColor:"#9AC9FB", borderRadius:"5px"}}>
                     <div>
                        <Link to ="/backoffice/organization/edit"> Ir a formulario de edición</Link>
                    </div>
                    <h2>{res.data[0].name}</h2>
                    <span>{res.data[0].short_description.replace(/<(.*?)>/g,"")}</span>
                    <img style={{height:"100px",width:"200px",marginTop:"10px"}} src={res.data[0].logo}></img>
                </div>
                )
            }
        }
        catch{
            alert("error cargando informacion de organizacion")
        }
    }

 
    useEffect(()=>{
        let mounted = true
        displayData(mounted)

        return ()=>{
           mounted=false
        }
        
    },[])

    
    return (
        <div className="container">
           
            {data}
            
        </div>
    )
}
