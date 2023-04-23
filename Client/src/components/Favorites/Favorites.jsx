import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";
import styles from './Favorites.module.css'

const Favorites = ({ myFavorites }) =>{
    const dispatch = useDispatch();
    const [ aux, setAux] = useState(false);

    const handleOrden = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(true);
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    const onClose = () => {return} // para que no me elimine la card del home
    return (
        <div>
            <select className={styles.select} onChange={handleOrden}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select className={styles.select} onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
                <option value="allCharacters">All Characters</option>
            </select>
            {
                myFavorites?.map(({id, name, status, species, gender, origin, image})=>{
                    return (
                    <Card 
                    key={id}
                    id={id}
                    name={name}
                    status={status}
                    species={species}
                    gender={gender}
                    origin={origin?.name}
                    image={image}
                    onClose={onClose}/>
                    );
                 })
            }
        </div>
    )    
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
        }
}

export default connect(mapStateToProps,null)(Favorites);