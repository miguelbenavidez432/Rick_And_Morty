import style from "./Form.module.css"
import React, { useState } from "react";

const Form = () =>{

    const [userData, setUserData] = useState({ username: '', password: '' });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }

    const [errors, setErrors] = useState({
        username: '',
        password: ''
    })

    return(
        <form action="" className={style.container}>

        <label htmlFor="username">USERNAME:</label>
        <input type="text" name="username" value={userData.username} onChange={handleChange}/>
        <label htmlFor="password">PASSWORD:</label>
        <input type="password" name="password" value={userData.password} onChange={handleChange} />

        <button className={style.button}>LOGUIN</button>

        </form>
    )
}

export default Form;