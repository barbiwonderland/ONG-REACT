import * as React from 'react'
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import InputGroup from '../components/InputGroup';
import endsWithImageExtension from '../utils/endsWithImageExtension';

function SlidesForm({ slide = { title: "", description: "", image: "", order: "" } }) {
  const { submitText, submitAction } = slide.id ?
    {
      submitText: 'Guadar slide',
      submitAction: (values) => {
        // patchSlide(values); the method for the PATCH request is called
        console.log('editando slide con...', values);
      }
    } :
    {
      submitText: 'Crear slide',
      submitAction: (values) => {
        // postSlide(values); the method for the POST request is called
        console.log('creando slide con...', values)
      }
    }

  const validationSchema = Yup.object({
    title: Yup.string().required('El campo no puede estar vacío'),
    description: Yup.string().required('El campo no puede estar vacío'),
    image: Yup.string().required('Debe proporcionar la url de una imagen').url('Debe ser una url válida').test('urlEndsWithImage', 'La url debe apuntar a una imagen', endsWithImageExtension),
    order: Yup.number().integer('El orden debe ser un número entero').positive('El orden debe ser un número mayor a 0').required('Debe proporcionar un orden.')
  })

  return (
    <Formik
      initialValues={slide}
      validationSchema={validationSchema}
      onSubmit={submitAction}>
      {({ errors }) =>
        <Form className="container py-3 col-md-6 col-lg-4">
          <h1 className="fw-bold p-1 mb-4 text-center">Formulario de creación de slides</h1>
          <InputGroup identifier="title" labelText="Título" errors={errors} />
          <InputGroup identifier="description" labelText="Descripción" errors={errors} />
          <InputGroup identifier="image" labelText="Imagen (url)" errors={errors} />
          <InputGroup identifier="order" type='number' labelText="Orden" errors={errors} />
          <button type="submit" className="btn btn-primary btn-lg mx-auto d-block mt-5">{submitText}</button>
        </Form>}
    </Formik>
  );
}

export default SlidesForm;