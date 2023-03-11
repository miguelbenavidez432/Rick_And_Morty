import { useSelector, useDispatch } from "react-redux"
import style from './Favorites.module.css'
import { Link } from "react-router-dom";
import { orderCards, filterCards } from "../../redux/actions";


export default function Favorites() {
    const myFavorites = useSelector(state => state.myFavorites);
    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }

    const handlefilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div>
            <div>
                <select onChange={handleOrder}>
                    <option value="order" disabled="disable">Order By</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select onChange={handlefilter}>
                    <option value="filter" disabled="disable">Filter By</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Unknow">Unknow</option>
                    <option value="Genderless">Genderless</option>
                </select>
            </div>
            {
                myFavorites.map((char) => {
                    return <div className={style.container}>
                        <div>
                            <Link to={`/detail/${char.id}`}>
                            <h2>Nombre: {char.name}</h2></Link>
                            <h2>Especie: {char.species}</h2>
                            <h2>Género: {char.gender}</h2>
                        </div>
                        <div>
                            <img className={style.image} src={char.image} alt={char.name} />
                        </div>
                    </div>
                })
            }
        </div>
    )
}