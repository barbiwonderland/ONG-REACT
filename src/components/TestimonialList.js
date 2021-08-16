import React, { useEffect, useState } from 'react'





//This componenthas a  mook array whit dommy data to use in the display of testimonials,
//Also has the code for working whit the image data (like background image)
//And the function for manage the description that comes as <p>

const mookTestimonialList = [{id: 1, name:"bla", image:"url", description: "kaugcshaiojcaosasjbasbxasxbk"},{id: 2, name:"bla", image:"url", description: "kaugcshaiojcaosasjbasbxasxbk"},{id: 3, name:"bla", image:"url", description: "kaugcshaiojcaosasjbasbxasxbk"},{id: 4, name:"bla", image:"url", description: "kaugcshaiojcaosasjbasbxasxbk"}]


export default function TestimonialList() {

    const [testimonials, setTestimonials]= useState([])

   
    function testimonialImageStyle(url){

        
       let style ={
            backgroundImage:`url(${url})`,
            backgroundRepeat:"no-repeat",
            backgroundSize:"contain",
            height: 100,
            width: 100+"%",
            
        }
       return style
    }
    


    function handleHtmlText(text){
        return  {__html: text}
    }

    

    useEffect(()=>{
        let aux;
        if(true){
            aux= mookTestimonialList.map(testimonials=>{
                return(

                    <div key={testimonials.id} className="col-md-3 bg-light m-1 d-fle flex-column shadow-lg p-3 mb-5 bg-white rounded ">

                        <div><strong>Nombre: </strong><p> {testimonials.name}</p></div>
                        <div  style={testimonialImageStyle(testimonials.image)}></div>
                        <div style={{wordWrap:"break-word"}} dangerouslySetInnerHTML={handleHtmlText(testimonials.description)}></div>

                    </div>

                )
            })
        }
        else{
            aux = (<div className="col-md-3 bg-light m-1 d-fle flex-column shadow-lg p-3 mb-5 bg-white rounded">
                        <h2>No se pudieron cargar los testimonios</h2>
                    </div>)
        }
        setTestimonials(aux)

    },[])

    
    return (
        <div className="container  bg-light">
             <div>
                <h2 className="border-bottom border-dark w-25"> <small className="text-muted">Lista de </small>Testimonios</h2>

            </div>

            <div className="row container" style={{width:"90%"}}>
                {testimonials}
               

            </div>
        </div>
    )
}
