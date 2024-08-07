import React, {useState} from "react";
import { useFormik } from "formik";

const UserForm = () => {

    const onSubmit = () =>{
        setTimeout(()=>{
            console.log("Submitted")
        }, 3000) 
        
        setSubmitting(false)
    }

    const {values, handleChange, handleBlur, handleSubmit, isSubmitting, setSubmitting} = useFormik({
        initialValues:{
            email: "",
            age: "",
            password: "",
            confirmPassword: ""
        },
        onSubmit
    })

    return (
        <>
            <div className="form-area">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="email">Email address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}                        
                            placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label for="age">Age</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="age" 
                            name="age"
                            value={values.age}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Age" />
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label for="confirmPassowrd">Confirm Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="confirmPassword" 
                            name="confirmPassword"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}
                            placeholder="Confirm Password" />
                    </div>
                    <br/>
                    <button disabled={isSubmitting} className="btn btn-info" type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default UserForm;