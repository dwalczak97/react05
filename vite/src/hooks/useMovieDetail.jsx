import { useContext } from "react"
import movieContext from "../context/MovieContext";



const useMovieDetail = () => {
     const contextMovie = useContext(movieContext);
    return contextMovie;

};

export default useMovieDetail;