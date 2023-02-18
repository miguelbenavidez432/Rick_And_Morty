 const validation = (userData) => {

    let errrors = {}

    if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.username)){
        errrors.username = "El email es inválido";
    }
    if(!userData.username){
        errrors.username = "El nombre no puede estar vacio";
    }
    if(userData.username.length > 35){
        errrors.username = "El email no puede ser mayor a 35 caracteres"
    }
    if(userData.password.match(/\d/)){
        errrors.password = "La contraseña debe tener un numero";
    }
    return errrors
}

export default validation