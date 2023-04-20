import { useState } from "react";
import style from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  const [id, setId] = useState('')


   return (
      <div className={style.divSearchBar}>
         <input className={style.inputSearchBar} type='search' placeholder="Ingresa id" onChange={(evento) =>
             {setId(() => {const { value } = evento.target; 
             
             return value})}} />
         <button className={style.botonSearchBar} onClick={() => {onSearch(id)}}>Agregar</button>
      </div>
   );
}
