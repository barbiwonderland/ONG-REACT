import React, {useEffect,useState} from 'react'
import logo from "../assets/LOGO-SOMOSMAS.png"
import facebookIcon from "../assets/facebook-icon.png"
import instagramIcon from "../assets/instagram-icon.png"
import { Link } from 'react-router-dom'
import "../styles/footerWebStyle.css"

export default function FooterWeb({data}) {

    const [ongData,setOngData]=useState("")

    useEffect(() => {
        
        let aux;
        
        if(data){
            aux=(data.map(d=>{
                        return(
                            <div key={d.id}>
                              <p><strong>Telefono:</strong> {d.cellphone}</p>
                               <p><strong>Direccion:</strong> {d.address}</p>
                            </div>
                        )
                    })
                )
        }
        

        setOngData(aux)
    }, [data])




    return (
        <footer className="row justify-content-center pt-4">
            <div className="my-card col-md-4 mr-2 shadow p-3 mb-5 rounded" >
                <img  src={logo}></img>
            </div>
            {/* center links */}
            <div className="my-card p-4 mr-2 shadow  rounded text-center  flex-column align-items-center" >
               <div className="d-flex-column justify-content-center align-items-center">
               <Link to="/"><p>Nosotros</p></Link>
               <Link to="/"><p>Contacto</p></Link>
               <Link to="/"><p>Actividades</p></Link>

               </div>

            </div>
            <div className="my-card col-md-4 mr-2 shadow p-3 mb-5  rounded">

                {ongData}

                <div  className="d-flex justify-content-around">
                    <img  src={facebookIcon}></img>
                    <img  src={instagramIcon}></img>
                </div>
            </div>
            
        </footer>
    )
}
