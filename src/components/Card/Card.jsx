import React, { useState } from "react";
import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite, deleteFavorite } from "../../redux/actions";


export default function Card({ name, id, onClose, species, gender, image}) {

   const dispatch = useDispatch();
   const [ isFav, setIsFav] = useState(false);

   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false);
         dispatch(deleteFavorite(id))
      }
      else{
         setIsFav(true);
      }
   }
   return (
      <div className={style.container}>
         <button className={style.button} onClick={onClose}>X</button>
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2></Link>         
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img className={style.image} src={image} alt="" /> 
      </div>
   );
}
