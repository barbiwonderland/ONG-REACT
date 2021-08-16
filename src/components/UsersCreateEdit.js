import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "../styles/avatar.css"
import * as Yup from "yup"

const validationSchema = Yup.object({
	email: Yup.string().email("put a valid email").required("required!!"),
	name :Yup.string().required("required!!"),
    role:Yup.string().required("required!!"),

});

function handleImage(user){
    if(user.profilePhoto){
        return checkingImg(user.profilePhoto)
    }
    
}

function checkingImg(url){
    let image = new Image();
     image.src = url
   
    if (image.width === 0) return (
        <div >
            <div className="head"></div>
            <div className="body"></div>
            <span style={{position:"relative", bottom:"50px", fontWeight:"bold"}}>Invalid Img</span>
        </div>
    )
    else  return <img src={url} alt ="image cant be loaded"></img>;
       
}  

   
function isEmpty(obj) {

    if(obj===null || Object.keys(obj).length === 0)return true
    return false
    
}
 

       
 

export default function UsersCreateEdit({user}) {

    const fontStyle={fontWeight:"bold", fontSize:"20px", fontFamily:"Georgia, seri"}
    const[formData, setFormData] = useState()
    const [imgUrl,setImgUrl] = useState("")
    const [createBtnDisable, setCreateBtnDisable] = useState(false)
    const [editBtnDisable, setEditBtnDisable] = useState(false)

    const initialValues={
        email:"",
        name:"",
        role:"",
        profilePhoto:""
        
    }

    useEffect(()=>{
       if(isEmpty(user)) {
           
            setEditBtnDisable(true)
            setFormData(initialValues)
        }
        
       else {
            setCreateBtnDisable(true)
            setImgUrl(handleImage(user))
            setFormData(user)
         } 
           
               
    },[])
        
      
       
  
   
    function handleSubmit(values){
        if(isEmpty(user)){

            console.log("funcion para crear usuario con "+ values)
        }
        else{
            console.log("funcon para editar usuario "+ values)
        }
    }

    
    
    return (
        <div className="container mt-5">
                
            <Formik initialValues={formData} onSubmit={handleSubmit} validationSchema={validationSchema}enableReinitialize>

                <Form  style={{minWidth:"250px",maxWidth:"300PX",backgroundColor:"#c5d5e6", padding:"10px",borderRadius:"5px"}} >
                    
                    <div className="avatar-container">
                        {imgUrl}
                    </div>
                  
                    <div className="form-group w-100">
                        <p style={fontStyle} >Profile Photo</p>
                        <Field  name="profilePhoto"   type="text" id="profilePhoto" className="form-control"  />
                        
                    </div>

                    
                    <div className="form-group w-100" >
                        <p style={fontStyle}>Email address</p>
                        <Field   name="email" type="email" id="email" className="form-control"  placeholder="Enter email" />
                        <ErrorMessage  name="email"/>

                    </div>

                    <div className="form-group w-100">
                        <p style={fontStyle} >Name</p>
                        <Field  name="name"   type="text" id="name" className="form-control"  placeholder="Name" />
                        <ErrorMessage name="name"/>
                    </div>
                    <div className="form-group w-100">
                        <p style={fontStyle} >Role</p>
                        <Field  name="role"   type="text" id="role" className="form-control" placeholder="Role" />
                        <ErrorMessage name="role"/>
                    </div>

                    <div>
                        <button disabled={createBtnDisable} type="submit" className="btn btn-primary m-2">
                        CREATE
                        </button>

                        <button disabled={editBtnDisable} type="submit" className="btn btn-primary m-2">
                        EDIT
                        </button>
                        
                    </div>
                </Form>
                
            </Formik>
            
		</div>
    )
}



     



    
    
       

  
    

   
    
    
    

   
      
  