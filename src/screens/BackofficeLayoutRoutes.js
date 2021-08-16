import React from 'react'
import {HeaderBackOffice} from "../components/HeaderBackOffice"
import {Switch,Route, Redirect,Link} from "react-router-dom"

export default function BackofficeLayoutRoutes() {
    //Note: the Link in the HeaderBackOffice change the url but dosent refresh the page, maby is the Browser router that is call in it and also in the App section.
    return (
        <div>
            
            <HeaderBackOffice/>
               
                {/* <Link to="/backoffice/news/create">News create</Link>
                 */}
            
                <Switch>
                    <Route path="/backoffice" exact render={()=><h1>Backoffice</h1>}/>
                    <Route path="/backoffice/actividades" exact render={()=><h1>Actividades</h1>}/>
                    <Route path="/backoffice/nosotros" exact render={()=><h1>Nosotros</h1>}/>
                    <Route path="/backoffice/novedades" exact render={()=><h1>Novedades</h1>}/>
                    <Route path="/backoffice/testimonios" exact render={()=><h1>Testimonios</h1>}/>
                    <Route path="/backoffice/contactos" exact render={()=><h1>Contactos</h1>}/>
                    <Route path="/backoffice/contribuyentes" exact render={()=><h1>Contribuyentes</h1>}/>
                    <Route path="/backoffice/news/create" exact render={()=><h1>Create News</h1>}/>
                    <Route path="/notfound" exact render={()=><h1>Not Found</h1>}/>
                    <Redirect to="/notfound"/>
                </Switch>
            

        </div>
    )
}
