import { useParams } from "react-router-dom"
import useMovieDetail from "../hooks/useMovieDetail";


const MovieDetail = () => {
  const {movie_id} = useParams();
   useMovieDetail();
   console.log(movie_id, title,poster_path)
  return (
    <div>
        details -  {movie_id}
    </div>
  );
};
export default MovieDetail;