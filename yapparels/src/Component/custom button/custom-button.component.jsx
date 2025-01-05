import React from "react";
import "./custom-button.style.css"
const CustomButton = ({children,type,clickEvent}) => (
    <div className="form-field">
        <button type={type} className={type} onClick={clickEvent}>{children}</button>
    </div>
)
export default CustomButton