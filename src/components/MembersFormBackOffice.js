import React  from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BsExclamationCircleFill } from "react-icons/bs";
import alertMessage from "./AlertMessage";

export const MembersFormBackOffice = ({ data}) => {

  const formik = useFormik({
    initialValues: data
      ? { name: data.name, image: data.image, description: data.description,facebook:data.facebookUrl,linkedin:data.linkedinUrl }
      : {
          name: "",
          image: "",
          description: "",
          facebook:"",
          linkedin:"",
        },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Campo Obligatorio"),
      image: Yup.string()
        .required("Campo Obligatorio")
        .matches(/(https?:\/\/.*\.(?:png|jpg))/i, "Enter correct url!"),
      facebook: Yup.string().required("Campo Obligatorio"),
      linkedin: Yup.string().required("Campo Obligatorio"),
      description: Yup.string()
        .min(10, "Must be 10 characters or more")
        .required("Campo Obligatorio"),
    }),
    onSubmit: (values) => {
      // data ? "POST​/members" : "PUT/members/{id}";
      console.log(values);
      alertMessage("success", "Agregado exitosamente", "", "OK","green");
    },
  });
// Button Logic
  const button = (
    <button
      type="submit"
      className={data ? "btn btn-primary mt-2" : "btn btn-success mt-2"}
    >
      {data ? "Editar" : "Agregar"}
    </button>
  );
  return (
    <React.Fragment>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-10 col-md-8 border p-3 mt-3 rounded ">
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group my-2">
                <label forhtml="name" className="my-2">
                  Nombre
                </label>
                <input
                  type="name"
                  className="form-control"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="border  border-danger rounded mt-3 text-danger p-1 align-items-center d-flex justify-content-center">
                    {formik.errors.name}
                    <BsExclamationCircleFill className="mx-2" />
                  </div>
                ) : null}
              </div>
              <div className="form-group my-2">
                <label forhtml="image" className="my-2 mx-2">
                  Imagen url:
                </label>
                <input
                  type="name"
                  className="form-control "
                  name="image"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.image}
                />
                {formik.touched.image && formik.errors.image ? (
                  <div className="border  border-danger rounded mt-3 text-danger p-1 align-items-center d-flex justify-content-center">
                    {formik.errors.image}
                    <BsExclamationCircleFill className="mx-2" />
                  </div>
                ) : null}
              </div>
              <div className="form-group my-2">
                <label forhtml="facebook" className="my-2 mx-2">
                  Facebook:
                </label>
                <input
                  type="name"
                  className="form-control "
                  name="facebook"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.facebook}
                />
                {formik.touched.facebook && formik.errors.facebook ? (
                  <div className="border  border-danger rounded mt-3 text-danger p-1 align-items-center d-flex justify-content-center">
                    {formik.errors.facebook}
                    <BsExclamationCircleFill className="mx-2" />
                  </div>
                ) : null}
              </div>
              <div className="form-group my-2">
                <label forhtml="linkedin" className="my-2 mx-2">
                  Linkedin:
                </label>
                <input
                  type="name"
                  className="form-control "
                  name="linkedin"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.linkedin}
                />
                {formik.touched.linkedin && formik.errors.linkedin ? (
                  <div className="border  border-danger rounded mt-3 text-danger p-1 align-items-center d-flex justify-content-center">
                    {formik.errors.linkedin}
                    <BsExclamationCircleFill className="mx-2" />
                  </div>
                ) : null}
              </div>
              <div className="form-group my-2">
                <label forhtml="description" className="my-2">
                  Descripción
                </label>
                <CKEditor
                  value={formik.values.description}
                  id="description"
                  editor={ClassicEditor}
                  data={formik.values.description}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    formik.values.description = { data }.data;
                  }}
                />
                {formik.touched.description && formik.errors.description ? (
                  <div className="border rounded mt-3 text-danger p-1 align-items-center d-flex justify-content-center">
                    {formik.errors.description}
                    <BsExclamationCircleFill className="mx-2" />
                  </div>
                ) : null}
              </div>
              <div className="text-center">
              {button}
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
