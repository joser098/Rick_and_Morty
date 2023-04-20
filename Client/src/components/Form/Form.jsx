import { useState } from "react";
import { validation } from "../validation";
import styles from'./form.module.css'
// import { hasFormSubmit } from "@testing-library/user-event/dist/utils";

const Form = ({ login }) => {
    const [ userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const [ errors, setErrors] = useState({
        email: '',
        password: ''
    });

const handleChange = (event) => {
    setUserData({
        ...userData,
        [event.target.name]: event.target.value
    })

    setErrors(
        validation({
          ...userData,
          [event.target.name]: event.target.value
        })
      )
}    

const handleSubmit = (event) => {
   
    event.preventDefault();
    login(userData)

}
   

    return(
        <div>
            <form className="form">
                <p className={styles.titulo}>RICK AND MORTY</p>
                <label className={styles.labelForm} htmlFor="email">Email</label>
                <input className={styles.inputForm} name="email" 
                       type="email" 
                       value={userData.email}  
                       onChange={handleChange}
                       placeholder="Ingresar email"/>
                {errors.email && <p className={styles.errorForm}>{errors.email}</p>}       

                <label className={styles.labelForm} htmlFor="password">Contraseña</label>
                <input className={styles.inputForm} name="password" 
                       type="password" 
                       value={userData.password} 
                       onChange={handleChange}
                       placeholder="Ingresar contraseña"/>
                {errors.password && <p className={styles.errorForm}>{errors.password}</p>}       

                <button className={styles.botonForm} onClick={handleSubmit}>Ingresar</button>
            </form>
        </div>
    )
}

export default Form;