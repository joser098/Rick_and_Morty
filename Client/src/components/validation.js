export const validation = (userData) => {
    let errors = {};

    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
        errors.email = "Debe ser un correo electrónico valido"
    }
    if(!userData.email) {
        errors.mail = "Debe ingresar un correo electronico"
    }

    if(userData.email.length > 35) {
         errors.mail = "No puede contener mas de 35 caracteres"
        }

    if(!/\d/.test(userData.password)) {
        errors.password = "Debe contener al menos un numero"
    };

    if(userData.password.length < 6 || userData.password.length > 10) {
         errors.password = "Debe contener entre 6 y 10 caracteres"
        };

        return errors;

}

