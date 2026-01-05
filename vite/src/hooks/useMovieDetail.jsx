import { useContext } from "react"
import movieContext from "../context/MovieDetailContext";


const useMovieDetail = (id) => {
     const contextMovie = useContext(movieContext);
    return contextMovie;

};

export default useMovieDetail;