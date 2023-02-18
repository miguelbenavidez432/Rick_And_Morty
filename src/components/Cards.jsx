import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
      <div>
         {
            characters.map((element) => {
               return <Card
                  name={element.name}
                  species={element.species}
                  gender={element.gender}
                  image={element.image}
                  onClose={() => window.alert('Emulamos que se cierra la card')}
               />
            })
         }

      </div>
   )
}
