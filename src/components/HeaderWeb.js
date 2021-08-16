import React, {useState, useEffect, useMemo,useContext} from 'react'
import logo from "../assets/LOGO-SOMOSMAS.png"
import {Link, NavLink} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { fetchActivities } from '../store/activities/activitiesReducer'
import "../styles/headerWebStyles.css"

const NAV_LINKS=[
    {
        name:"Home",
        path:"/"
    },
    {
        name:"Nosotros",
        path:"/nosotros"
    },
    {
        name:"Contacto",
        path:"/contacto"
    },

]

export default function HeaderWeb({isLogIn}) {


    
    
    const [activitieData, setActivitieData]=useState([])
    const dispatch = useDispatch()
   
    async function handleActivitiesDispatch(){

        try{
            const call = await dispatch(fetchActivities())
            const response = call.payload.data
            setActivitieData(response)

        }
        catch{
            setActivitieData([])
        }

    }

    useEffect(()=>{
        
        handleActivitiesDispatch()
    },[])

    const linksArray= useMemo(()=>{

        return(
            NAV_LINKS.map(link=>{
                return(
                    
                    <div className="col-md-2 mt-4" key={link.name}>
                        <NavLink
                            activeClassName="link-navbar-active"
                            className="link-navbar"
                            exact
                            to={link.path}
                        >
                            {link.name}
                        </NavLink>
                    </div>
        
                    )
                })
        )

    },[])

        // const activities = useMemo(()=>{
            
            
        //         return activitieData.map(activitie=>{
        //             return(<Link className="activitieLink" key={activitie.id} to={`/actividad/${activitie.id}`}>{activitie.name}</Link>)
        //         })
                               
            
        // }, [activitieData])
        
        

        const btnLogIn = useMemo(()=>{
            
            const btn = isLogIn? <div className="col-md-2 mt-3"></div>:<div className="col-md-2 mt-3"><button className="btnLogin">Log In</button></div>
            
            return btn

        },[isLogIn])

        
        
   

       
        
        

    
    return (
        <header className="row shadow p-3 mb-5 bg-white rounded d-flex justify-content-center">

            <div className="col-md-4 my-logo">
                <img src={logo}></img>
            </div>
            
            {linksArray}
                <div className="col-md-2 mt-4">
                    
                        
                        <div tabIndex="1" className="activitiesMenu">
                            <p>Actividades</p>
                            {/* {activities} */}
                        </div>
                    
                </div>

                {btnLogIn}
        </header>
    )
}
     
            
                
           

   
  
  
            
 