import React, { useState } from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import AlertMessage from "../components/AlertMessage";
import { postMessage } from "../services/contactsService";

import "../styles/contactForm.css";

const handleClick = () => {
  const responseAlert = false;
  AlertMessage(
    "info",
    "Consulta",
    "Seguro que desea cancelar?",
    "Aceptar"
  ).then((value) => {
    if (value) {
      //Do something
      console.log(value);
    } else {
      console.log(value);
    }
  });
};

function FormularioContacto() {
  const [addData, setData] = useState();

  const phoneRegExp =
    /^(\(\+?\d{2,3}\)[\*|\s|\-|\.]?(([\d][\*|\s|\-|\.]?){6})(([\d][\s|\-|\.]?){2})?|(\+?[\d][\s|\-|\.]?){8}(([\d][\s|\-|\.]?){2}(([\d][\s|\-|\.]?){2})?)?)$/;

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Demasiado Corto!")
      .max(20, "Demasiado Largo!")
      .required("Requerido!"),
    email: Yup.string()
      .email("No es un Email Valido!")
      .min(12, "Demasiado Corto!")
      .max(40, "Demasiado Largo!")
      .required("Requerido!"),
    phone: Yup.string()
      .matches(phoneRegExp, "No es un número válido")
      .max(13, "Demasiado Largo!")
      .min(8, "Demasiado Corto!!")
      .required("Required"),
    message: Yup.string()
      .min(10, "El mensaje es muy corto")
      .max(500, "Demasiado Largo!")
      .required("Requerido!"),
  });

  const handleSubmit = async (values, { resetForm, setStatus }) => {
    try {
      const {
        data: { success },
      } = await postMessage(values);

      if (success) {
        resetForm();
        setStatus({ submit: "success" });
      } else {
        throw new Error();
      }
    } catch (error) {
      setStatus({ submit: "failed" });
    }
  };

  const postSubmitMessage = {
    success: (
      <div class="alert alert-success" role="alert">
        El mensaje fue enviado con éxito
      </div>
    ),
    failed: (
      <div class="alert alert-danger" role="alert">
        Hubo un error al enviar el mensaje
      </div>
    ),
  };

  return (
    <div className="container-fluid ">
      <Formik
        initialValues={{ name: "", email: "", phone: "", message: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ handleChange, values, status }) => {
          const postSubmitMessageToShow = postSubmitMessage[status?.submit];

          return (
            <Form className="container py-2  col-*8 col-sm-9 col-md-9 col-lg-9 mb-4">
              <h3>Nombre</h3>
              <div className="row px-2 py-1">
                <Field name="name">
                  {({ field, form: { touched, errors }, meta }) => (
                    <div className="row px-2 py-1">
                      <input
                        name={field.name}
                        type="text"
                        value={values.name}
                        onChange={handleChange}
                        placeholder="Nombre"
                      ></input>
                    </div>
                  )}
                </Field>
              </div>
              <ErrorMessage
                name="name"
                render={(msg) => (
                  <div className="alert alert-info" role="alert">
                    {msg}
                  </div>
                )}
              />

              <h3>Email</h3>
              <div className="row px-2 py-1">
                <Field name="email">
                  {({ field, form: { touched, errors }, meta }) => (
                    <div className="row px-2 py-1">
                      <input
                        name={field.name}
                        type="text"
                        value={values.email}
                        onChange={handleChange}
                        placeholder="Email"
                      ></input>
                    </div>
                  )}
                </Field>
              </div>
              <ErrorMessage
                className="py-0"
                name="email"
                render={(msg) => (
                  <div className="alert alert-info" role="alert">
                    {msg}
                  </div>
                )}
              />

              <h3>Teléfono</h3>
              <div className="row px-2 py-1">
                <Field name="phone">
                  {({ field, form: { touched, errors }, meta }) => (
                    <div className="row px-2 py-1">
                      <input
                        name={field.name}
                        type="text"
                        placeholder="Teléfono"
                        value={values.phone}
                        onChange={handleChange}
                      ></input>
                    </div>
                  )}
                </Field>
              </div>

              <ErrorMessage
                name="phone"
                render={(msg) => (
                  <div className="alert alert-info" role="alert">
                    {msg}
                  </div>
                )}
              />

              <h3>Mensaje</h3>
              <div className="row px-2 py-1">
                <Field name="message">
                  {({ field, form: { touched, errors }, meta }) => (
                    <div className="row px-2  py-0.5">
                      <textarea
                        name={field.name}
                        type="textfield"
                        rows="8"
                        cols="40"
                        value={values.message}
                        onChange={handleChange}
                        className="textarea"
                        placeholder="Ingrese su Mensaje"
                      />
                    </div>
                  )}
                </Field>
              </div>
              <ErrorMessage
                name="message"
                render={(msg) => (
                  <div className="alert alert-info" role="alert">
                    {msg}
                  </div>
                )}
              />

              <div className="row py-2">
                <div className="col">
                  <button type="submit" class="btn btn-primary me-3">
                    Enviar
                  </button>
                  <button
                    type="button"
                    onClick={handleClick}
                    class="btn btn-primary"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
              {postSubmitMessageToShow}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default FormularioContacto;
