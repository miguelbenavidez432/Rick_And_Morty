import React from "react";
import style from "./Card.module.css"
import { Link } from "react-router-dom";

export default function Card(props) {
   return (
      <div className={style.container}>
         <button className={style.button} onClick={props.onClose}>X</button>
         <Link to={`/detail/${props.id}`}>
            <h2>{props.name}</h2></Link>         
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img className={style.image} src={props.image} alt="" /> 
      </div>
   );
}
