import { useParams } from "react-router-dom"
import useMovieDetail from "../hooks/useMovieDetail";


const MovieDetail = () => {
  const {id} = useParams();
   const { movie } = useMovieDetail(id);
   console.log(id)
  return (
    <div>
      <p></p>
        details - {movie} {id}
    </div>
  );
};
export default MovieDetail;