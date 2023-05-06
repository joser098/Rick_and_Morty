import { NavLink } from "react-router-dom";
import styles from './Card.module.css'
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

const Card = ({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) => {

   const [ isFav, setIsFav] = useState(false);
   
   const handleFavorite = () => {
      if(isFav){ 
         setIsFav(false);
          removeFav(id);
         } else { 
            setIsFav(true)
             addFav({id,name,status,species,gender,origin,image})}
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);
   
   return (
      <div className={styles.divCard}>
         
         <img className={styles.image} src={image} alt='' />
           
         <button className={styles.clickFav} onClick={handleFavorite}>{isFav ?'❤️' : '🤍'}</button>

         <button className={styles.botonCard} onClick={() => {onClose(id)}}>X</button>

         <NavLink to={`/detail/${id}`}>
         <h2 className={styles.name}>{name}</h2>
         </NavLink>
         

         {/* <h2 className={styles.status} >{status}</h2>
         <h2 className={styles.species} >{species}</h2>
         <h2 className={styles.gender} >{gender}</h2>
         <h2 className={styles.origin} >{origin}</h2> */}
      </div>
   );
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
 }  

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
   
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);