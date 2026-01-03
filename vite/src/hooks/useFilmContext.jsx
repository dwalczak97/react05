import { useContext } from "react"
import filmContext from "../context/FilmListContext"


const useFilmListContext = () => {
    const context = useContext(filmContext);
    return context;
};

export default useFilmListContext;