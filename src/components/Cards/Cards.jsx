import Card from '../Card/Card';
import style from './Cards.module.css';

export default function Cards({ characters, onClose }) {
   return (
      <div >
         {
            characters.map((element) => {
               return <Card 
                  key = {element.id}
                  name={element.name}
                  species={element.species}
                  gender={element.gender}
                  image={element.image}
                  id = {element.id}
                  onClose={() => onClose(element.id)}
               />
            })
         }

      </div>
   )
}
