import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css"
import { Link } from "react-router-dom";

const Detail = () =>{

    const { detailId } = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

    return(
        <div className={style.container}>
            <h2>Detail</h2>
            <button className={style.button}>
                <Link to="/home">Home</Link> 
            </button>
            <div className={style.divColumna}>
                <div className={style.div}><h1>{character?.name}</h1>
            <p>{character?.status}</p>
            <p>{character?.gender}</p>
            <p>{character?.species}</p>
            <p>{character?.origin?.name}</p></div>
                <div className={style.img}> <img src={character.image} alt={character.name} /></div>
            </div>           
        </div>
    )
}

export default Detail