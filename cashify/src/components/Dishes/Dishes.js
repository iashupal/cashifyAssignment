import React from 'react';
import './Dishes.css';

function Dishes(props){
    return(
        <div className="dishes">
            <img src={props.DishImg} alt={props.name}/>
            <p>{props.foodName}</p>
        </div>
    )
}
export default Dishes;