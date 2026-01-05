import { useParams } from "react-router-dom"
import useMovieDetail from "../hooks/useMovieDetail";
// import useMovieDetail from "../hooks/useMovieDetail";


const MovieDetail = () => {
  const {id} = useParams();
   const {movie } = useMovieDetail();
   console.log(id)
  return (
    <div>
        details -  {id}
    </div>
  );
};
export default MovieDetail;