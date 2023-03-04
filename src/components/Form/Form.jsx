import style from "./Form.module.css"
import React, { useState } from "react";
import validation from "./validation";

const Form = ({ login }) =>{

    const [userData, setUserData] = useState({ username: '', password: '' });

    const [errors, setErrors] = useState({
        username: '',
        password: ''
    })
    
    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = () =>{
        login(userData);
    }


    return(
        <form action="" className={style.container}>
        <br />
        <br />
        <label htmlFor="username" >USERNAME:   </label>
        <input type="text" name="username" value={userData.username} onChange={handleChange}/>
        {errors.username && <p className={style.red}>{errors.username}</p>}
        <br />
        <br />
        <br />
        <label htmlFor="password">PASSWORD:   </label>
        <input type="password" name="password" value={userData.password} onChange={handleChange} />
        {errors.password && <p className={style.red}>{errors.password}</p>}
        <br />
        <br />
        <br />
        <button className={style.button} onClick={handleSubmit}>LOGIN</button>

        </form>
    )
}

export default Form;