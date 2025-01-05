import React from "react";
import "./menu-item.style.css";
import { useNavigate } from "react-router-dom";


const MenuItem = ({ title,imageUrl }) =>{
  const navigate = useNavigate()
  return(
   <div className="menu-item" onClick={() => navigate(`/${title}`)}>
     <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}/>
     <div className="content">
       <div className="title">{title}</div>
       <div className="sub-title">SHOP NOW!!</div>
     </div>
   </div>
 );
}
export default MenuItem;
