import './App.css';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
// const API_KEY = '847f068a5de5.2e9b5bc63317e1052b73'

const current = [];

function App() {
   
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();
   let location = useLocation();
   
let EMAIL = "jxse@gmail.com";
let PASSWORD = 'clave123';

const login = (userData) => {
   if(userData.email === EMAIL && userData.password === PASSWORD){
      setAccess(true);
      navigate('/home')
   }
}

useEffect(() => {
   !access && navigate('/');
}, [access, navigate]);


const onSearch = (id) => {
if(current.includes(id)){
   return window.alert('No se puede repetir id')
} 

current.push(id);

   axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}

const onClose = (id) => {
   setCharacters((prev) => {
      return prev.filter(char => char.id !== id)
   })
}


   return (
      <div className='App'>
         {
          location.pathname !== '/' ? <Nav onSearch={onSearch} setAccess={setAccess}/> : null 
         }
         <Routes>
            <Route path='/home'
                   element={<Cards characters={characters} onClose={onClose} ></Cards>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/> 
            <Route path='/' element={<Form login={login}/>}/>  
            <Route path='/favorites' element={<Favorites/>}/>    

         </Routes>
      </div>
   );
}


export default App;
