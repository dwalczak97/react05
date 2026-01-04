import { useContext } from "react"
import movieContext from "../context/MovieDetailContext";


const useMovieDetail = () => {
     const contextMovie = useContext(movieContext);
    return contextMovie;

};

export default useMovieDetail;