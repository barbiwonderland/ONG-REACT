import React, { useEffect, useState, useMemo } from 'react'
import { getTestimonials } from '../../../services/testimonials'
import InnerHtml from '../../../components/innerHtml'

export default function TestimonialsHome() {


    const [testimonials, setTestimonialData]= useState([])

    useEffect(()=>{
		const handlerTestimonials = async ()=>{
			try{
				const {data: { data }} = await getTestimonials()
				setTestimonialData(data)

			}catch(e){
				console.log(e)
			}
		}
		handlerTestimonials()
	}, [])

	const renderTestimonials = useMemo(()=>{
		if(!testimonials.length) {
			return (
							<div className="col-md-3 bg-light m-1 d-fle flex-column shadow-lg p-3 mb-5 bg-white rounded">
								<h2>No se pudieron cargar los testimonios</h2>
							</div>
							)
		}

		return (
			<>
				{testimonials.slice(0,4).map(testimonials=>{
					return(

						<div key={testimonials.id}  className="col-md-4 bg-light text-center  m-2 shadow-lg p-3 mb-5 bg-white rounded border border-primary">
							<div ><strong>Nombre: </strong><p> {testimonials.name}</p></div>
							<div className="d-flex justify-content-center">
							<div className="homeTestimonialsImg border border-primary" style={{backgroundImage:`url(${testimonials.image})`}}></div>
							</div>
							<InnerHtml html={testimonials.description}/>
						</div>
					)
				})}
			</>
		)
			
	}, [testimonials])


    return (
        <div className='row p-5 justify-content-md-center'>
            {renderTestimonials}
        </div>
    )
}
