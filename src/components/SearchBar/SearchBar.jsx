import { useState } from "react";
import style from "./SearchBar.module.css";


export default function SearchBar({ onSearch }) {
   const [character, setCharacter] = useState('');

   const handleChange = (event) =>{
      setCharacter(event.target.value)
   }
   return (
      <div className={style.container} >
      <input value={character} onChange={handleChange} type='search' />
      <button onClick={() => onSearch(character)}>Agregar</button>
      </div>
   );
}
