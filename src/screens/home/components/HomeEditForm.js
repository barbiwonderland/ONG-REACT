import * as React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputGroup from "../../../components/InputGroup";

const ImgContainer = (props) => {
  return (
    <img
      src={props.imgUrl}
      className="w-100 mt-0 pt-2 img-fluid mx-auto d-block"
      alt=""
      onError={(e) => {
        e.target.src = "https://i.stack.imgur.com/GNhxO.png";
      }}
    />
  );
};

const NestedSlides = (props) => {
  const listSlides = props.values.slides;
  return listSlides.map((slide, index) => {
    return (
      <div key={index} className="mt-4 pt-2">
        <p className="mt-2 mb-0">Slide {index + 1}</p>
        <ImgContainer imgUrl={props.values.slides[index].image} />
        <InputGroup
          identifier={`slides[${index}].image`}
          labelText="Url de la imagen"
          type="url"
          errors={props.errors}
          classes="nested"
        />

        <InputGroup
          identifier={`slides[${index}].text`}
          labelText="Texto de la imagen"
          type="text"
          errors={props.errors}
          classes="nested"
        />
      </div>
    );
  });
};

const handleSubmit = (values, resetForm) => {
  console.log(values);
  resetForm();
};

function RegistrationForm(props) {
  const initialValues = {
    wellcomeText: "",
    slides: [
      { image: "", text: "" },
      { image: "", text: "" },
      { image: "", text: "" },
    ],
  };

  const validationSchema = Yup.object({
    wellcomeText: Yup.string()
      .min(20, "El contenido debe tener al menos 20 caracteres")
      .required("El campo no puede estar vacío"),
    slides: Yup.array().of(
      Yup.object().shape({
        image: Yup.string()
          .url("No es un formato url valido")
          .matches(/\.(?:jpg|gif|png)/, "No es un formato de imagen valido")
          .required("El campo no puede estar vacío"),
        text: Yup.string().required("El campo no puede estar vacío"),
      })
    ),
  });

  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values, resetForm);
        }}
      >
        {({ errors, values }) => (
          <Form className="container py-3 col-md-8 col-lg-5 mb-4">
            <h1 className="fw-bold p-1 my-4 text-center">
              Formulario Edición Home
            </h1>
            <div className="pt-4">
              <InputGroup
                identifier="wellcomeText"
                labelText="Texto de bienvenida"
                type="textarea"
                errors={errors}
              />
              <NestedSlides errors={errors} values={values} />

              <button
                type="submit"
                className="btn btn-primary btn-lg mx-auto d-block mt-5"
              >
                Enviar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegistrationForm;
