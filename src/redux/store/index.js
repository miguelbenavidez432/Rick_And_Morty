import { createStore, applyMiddleware, compose} from "redux";
import { ThunkMiddleware } from "react-redux";
import reducer from "../reducer/index";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose; // esta linea es para conectar con la extension del navegador
// >>> REDUX DEVTOOLS

const store = createStore(
    reducer, 
    composeEnhancer(applyMiddleware(ThunkMiddleware)) //esta linea es para hacer peticiones a un server
);

export default store;
