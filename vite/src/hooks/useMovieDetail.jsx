import { useContext } from "react"
import movieContext from "../context/MovieContext";



const useMovieDetail = (id) => {
     const contextMovie = useContext(movieContext);
    return contextMovie, id;

};

export default useMovieDetail;