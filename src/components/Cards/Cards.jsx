import Card from '../Card/Card';
import style from './Cards.module.css';

export default function Cards({ characters }) {
   return (
      <div >
         {
            characters.map((element) => {
               return <Card className={style.container}
                  key = {element.id}
                  name={element.name}
                  species={element.species}
                  gender={element.gender}
                  image={element.image}
                  id = {element.id}
                  onClose={() => window.alert('Emulamos que se cierra la card')}
               />
            })
         }

      </div>
   )
}
