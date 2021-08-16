import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function CategoriesForm({ Category }) {
  const { _name, description } = Category !== undefined ? Category : "";
  const [addData, setData] = useState(() => {
    return Category !== undefined ? { _name, description } : "";
  });

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(15, "Too Long!")
      .required("Required"),
    description: Yup.string()
      .min(15, "Too Short!")
      .max(400, "Too Long!")
      .required("Required"),
  });

  return (
    <div className="container justify-content-md-center">
      <Formik
        initialValues={{ name: "", description: "" }}
        onSubmit={(values, actions, errors) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {(props) => (
          <Form
            onSubmit={props.handleSubmit}
            className="container py-3 col-md-12 col-lg-4 mb-4">
            <h1>Categories</h1>
            <div className="row">
              <Field
                name="name"
                type="text"
                className="my-3"
                value={props.values.name}
                onChange={props.handleChange}></Field>
              <ErrorMessage
                name="name"
                render={(msg) => (
                  <div className="alert alert-info" role="alert">
                    {msg}
                  </div>
                )}
              />
            </div>
            <div className="row ">
              <Field name="description">
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => (
                  <CKEditor
                    name={field.name}
                    editor={ClassicEditor}
                    data={field.value}
                    onReady={(editor) => {}}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setFieldValue("description", editor.getData());
                    }}
                    onBlur={(event, editor) => {}}
                    onFocus={(event, editor) => {}}
                  />
                )}
              </Field>
              <ErrorMessage
                name="name"
                render={(msg) => (
                  <div className="alert alert-info" role="alert">
                    {msg}
                  </div>
                )}/>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-lg mx-auto d-block mt-5">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CategoriesForm;
