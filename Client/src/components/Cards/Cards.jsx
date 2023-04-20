import Card from '../Card/Card';
import style from './Cards.module.css'

export default function Cards({characters, onClose}) {
//const onClose = () => window.alert('Emulamos que se cierra la card');

   return (
   <div className={style.divCards}>
      {
         characters.map(({id, name, status, species, gender, origin, image})=>{
            return (
            <Card 
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={onClose} />
            );
         })
      }
   </div>
   );
}
