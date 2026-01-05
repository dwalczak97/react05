import { useParams } from "react-router-dom"
import useMovieDetail from "../hooks/useMovieDetail";
import useGetMovie from "../components/api-detail";


const MovieDetail = () => {
  const {id} = useParams();
   const { movie } = useMovieDetail();
   useGetMovie(id)
  //  console.log(id)
  return (
    <div>
      <p></p>
        details - {movie} {id}
    </div>
  );
};
export default MovieDetail;