import SearchBar from '../SearchBar/SearchBar'
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css'


const Nav = ({onSearch, setAccess}) => {
    
    const handleLogOut = () => {
        setAccess(false);
    }

    const ramdom = Math.ceil(Math.random()*826);
    return (
        <div className={styles.divNav}>
        <SearchBar onSearch={onSearch} />
        <button className={styles.botonNav} onClick={() => {onSearch(ramdom)}}>Ramdom</button>
        
        <NavLink to='/about'>   
        <button className={styles.botonNav}>About</button>
        </NavLink>

        <NavLink to='/home'>   
        <button className={styles.botonNav}>Home</button>
        </NavLink>

        <NavLink to={'/favorites'}>
        <button className={styles.botonNav}>Favorites</button>
        </NavLink>

        <button className={styles.botonNav} onClick={handleLogOut}>LOG OUT</button>

        </div>
    )
}

export default Nav;