import { useParams } from "react-router-dom"
import useMovieDetail from "../hooks/useMovieDetail";


const MovieDetail = (id) => {
  const {id} = useParams();
   const {movie } = useMovieDetail();
   console.log(movie.id, title,poster_path)
  return (
    <div>
        details -  {id}
    </div>
  );
};
export default MovieDetail;