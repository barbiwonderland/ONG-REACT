import * as React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputGroup from "./InputGroup";

function RegistrationForm() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("El campo no puede estar vacío"),
    lastName: Yup.string().required("El campo no puede estar vacío"),
    email: Yup.string()
      .email("Dirección de correo invalida")
      .required("Es necesario proporcionar una dirección de email"),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("Es necesario proporcionar una contraseña."),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ errors }) => (
        <Form className="container py-3 col-md-6 col-lg-4">
          <h1 className="fw-bold p-1 mb-4">Formulario de registro</h1>
          <InputGroup
            identifier="firstName"
            labelText="Nombre"
            errors={errors}
          />
          <InputGroup
            identifier="lastName"
            labelText="Apellido"
            errors={errors}
          />
          <InputGroup
            identifier="email"
            type="email"
            labelText="Email"
            errors={errors}
          />
          <InputGroup
            identifier="password"
            type="password"
            labelText="Contraseña"
            errors={errors}
          />
          <button
            type="submit"
            className="btn btn-primary btn-lg mx-auto d-block mt-5"
          >
            Registarse
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default RegistrationForm;
