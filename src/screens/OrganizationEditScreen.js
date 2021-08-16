import React,{useState} from 'react'
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const OrganizationEditScreen = ({ organization })=> {
    
    const { _name, logo, short_description,long_description,social_media_item } = organization!==undefined ? organization : ""


    const validationSchema = Yup.object({
        name: Yup.string()
          .min(3, "Too Short!")
          .max(15, "Too Long!")
          .required("Required"),
        short_description: Yup.string()
          .min(15, "Too Short!")
          .max(200, "Too Long!")
          .required("Required"),
        long_description: Yup.string()
          .min(15, "Too Short!")
          .max(400, "Too Long!")
        .required("Required"),
        logo: Yup.string().matches(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i, "It's not an Image!!!").required('Required')
        /*social_media_item: Yup.object({
            //Social Media Itema Validation
            name: Yup.string()
            .min(3, "Too Short!")
            .max(15, "Too Long!")
                .required("Required"),
            image: Yup.string().matches(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i, "It's not an Image!!!").required('Required'),
            url:Yup.string().matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            'Enter correct url!').required('required')
            
        })*/
    })
        
    
    

    return (
        
        <div className="container py-3  col-md-12 col-lg-8  justify-content-md-center">
            <h1>Organization</h1>
            <Formik
                initialValues={{
                    name: '',
                    logo: '',
                    short_description: '',
                    long_description: '',
                    social_media_link: '',
                }}
                onSubmit={(values, actions) => {
                    console.log(values)
                }}
                validationSchema={validationSchema}
                validateOnChange={false}
                validateOnBlur={false}
            >
                {(props) => (
                    
                <Form onSubmit={props.handleSubmit} >     
              <div className='row'>
                <Field name='logo'>
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta,
                  })=>(<input id="logo" name="logo" type="text" onChange={(event) => {
                    setFieldValue("logo", event.target.value);
                    }} />  )}
                  
                </Field>
                <ErrorMessage
                name='logo'
                render={(msg) => (
                    <div className='alert alert-info' role='alert'>
                    {msg}
                    </div>
                )}></ErrorMessage>          
                <img src={props.values.logo} alt="..." class="img-thumbnail width: 100% \9"></img>   
                            
                <h3 className='px-3'>Name</h3>
                <Field
                name='name'
                type='text'
                className='my-1 px-3'
                value={props.values.name}
                onChange={props.handleChange}></Field>
                <ErrorMessage
                name='name'
                render={(msg) => (
                    <div className='alert alert-info' role='alert'>
                    {msg}
                    </div>
                )}></ErrorMessage>
                </div>
                <div className='row py-4'>
                <h3>Short Description</h3>
            <Field name='short_description'>
            {({
                field, // { name, value, onChange, onBlur }
                form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                meta,
            }) => (
                <CKEditor
                name={field.name}
                editor={ClassicEditor}
                data={field.value}
                onReady={(editor) => { }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setFieldValue("short_description", editor.getData());
                }}
                onBlur={(event, editor) => {}}
                                        onFocus={(event, editor) => { }}               
                />
            )}
                </Field>
                <ErrorMessage
                name='short_description'
                render={(msg) => (
                  <div className='alert alert-info' role='alert'>
                    {msg}
                  </div>
                )}></ErrorMessage>
            </div>
                <div className='row '>
                <h3>Long Description</h3>
            <Field name='long_description'>
            {({
                field, // { name, value, onChange, onBlur }
                form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                meta,
            }) => (
                <CKEditor
                name={field.name}
                editor={ClassicEditor}
                data={field.value}
                onReady={(editor) => {console.log(editor)}}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setFieldValue("long_description", editor.getData());
                }}
                onBlur={(event, editor) => {}}
                                        onFocus={(event, editor) => { }}               
                />
            )}
                </Field>
                <ErrorMessage
                name='long_description'
                render={(msg) => (
                  <div className='alert alert-info' role='alert'>
                    {msg}
                  </div>
                )}></ErrorMessage>
            </div>
            <button
                type='submit'
                className='btn btn-primary btn-lg mx-auto d-block mt-5'>
                Submit

            </button>               
        </Form>
        )}
    </Formik>
    </div>
    )
}

export default OrganizationEditScreen
