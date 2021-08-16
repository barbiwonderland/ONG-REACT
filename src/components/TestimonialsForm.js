import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axiosIntance from "./../services/apiService";
import '../styles/backOfficeStyles.css';


export const TestimonialsForm = ({ selectedTestimonial }) => {

	const initialTestimonial = {
	  id: '',
		name: '',
		image: '',
		description: '',
		created_at: '',
		updated_at: '',
		deleted_at: ''
	};

	const initialValues = (selectedTestimonial || initialTestimonial);

	const addOrEditTestimonial = async (values) => {
    try {
      if(!selectedTestimonial) {  
        const result = await axiosIntance.post('/testimonials', values);
        console.log('Agregado');
      } else {
        const result = await axiosIntance.put(`/testimonials/${selectedTestimonial.id}`, values);
        console.log('Editado');
      } 
    } catch (error) {
      console.log(error);
    }
	};

  const editOrAddConditional = !selectedTestimonial ? 'Agregar' : 'Editar';

  return (
    <div className="container-sm align-middle">
      <div className="m-2 mt-5">
        <Formik 
          initialValues={initialValues}
          enableReinitialize={true}
          validationSchema={Yup.object({
            name: Yup.string().trim().max(30, 'El nombre no puede tener mas de 30 caracteres').required('El nombre es obligatorio'),
            image: Yup.string().trim().required('La imagen es obligatoria'), //image validation pending, utility in pull request 49-55 - endsWithImageExtension.js
            description: Yup.string().trim().max(400, 'La descripción no debe tener mas de 400 caracteres').required('La descripción es obligatoria')
          })}
          onSubmit={(values) => {
						addOrEditTestimonial(values);
          }} 
          >
          <Form className="form-group text-center p-3 rounded-2 form-testimonials" noValidate>              
            <h3>{editOrAddConditional} Testimonial</h3>
            <div>
              <label className="form-label label" htmlFor="name">Nombre:</label>
              <Field className="form-control mb-2"  name="name" type="text" />
              <ErrorMessage component="p" className="alert alert-danger" name="name" />        
            </div>
            <div>
              <label className="form-label label" htmlFor="image">Imagen:</label>
              <Field className="form-control mb-2"  name="image" type="text" />
              <ErrorMessage component="p" className="alert alert-danger" name="image" />        
            </div>
            <div>
              <label className="form-label label" htmlFor="description">Descripción:</label>
              <Field className="form-control mb-2" name="description" as="textarea" rows="5"/>
              <ErrorMessage component="p" className="alert alert-danger" name="description" /> 
            </div>
            <button type="submit" className="btn btn-primary m-3">{editOrAddConditional}</button>                
          </Form>
        </Formik>    
      </div>
    </div>
  );
};
