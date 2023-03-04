import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import imgnav from "../../img/imgnav.png";
import { NavLink } from "react-router-dom"


export default function Nav({ onSearch, logout }) {
const handleChange = () => {
    logout();
}

    return(
        <nav className={style.navbar}>
            <div><img className={style.img} src={imgnav} alt="" /></div>
            <NavLink className={style.span} to="/home">HOME</NavLink>
            <NavLink className={style.span} to="/about">ABOUT</NavLink>            
            <div ><SearchBar onSearch={onSearch}/></div>   
            <div className={style.span} onClick={handleChange}>LOGOUT</div>         
        </nav>
    )
}