import React from 'react';
import './Heading.css';
function Heading(props){
 return(
     <div className="heading">
         <h2>{props.heading}</h2>
         <p>{props.information}</p>
     </div>
 )   
}
export default Heading;