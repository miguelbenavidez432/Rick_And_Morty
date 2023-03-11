import { useState, useEffect } from "react";
import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, deleteFavorite } from "../../redux/actions/index";


export default function Card({ name, id, onClose, species, gender, image }) {

   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites);
   const [ isFav, setIsFav ] = useState(false);

   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false);
         dispatch(deleteFavorite(id))
      }
      else{
         setIsFav(true);
         dispatch(addFavorite({ name, id, onClose, species, gender, image }))
      }
   }  

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.container} key={id}>       
      
         <button className={style.button} onClick={onClose}>X</button>
         {
         isFav ? (
            <button className={style.button2} onClick={handleFavorite}>❤️</button>
         ) : (
            <button className={style.button2} onClick={handleFavorite}>🤍</button>
         )
      }
         <Link to={`/detail/${id}`}>
         <h2>{name}</h2></Link>         
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img className={style.image} src={image} alt="" /> 
      </div>
   );
}
