import React from "react";
import "./form-field.style.css"

const FormField = ({type,handlechange, placeholder,name}) => (
    <div className="form-field">
        <input name={name} type={type} required onChange={() => handlechange } placeholder = {placeholder}/>
    </div>
)
export default FormField