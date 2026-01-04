

import { NavLink } from "react-router-dom";
import useFilmListContext from "../hooks/useFilmContext";
import useMovieDetail from "./api-detail";


function MovieList () {
const {lists} = useFilmListContext();

return (

 <nav>
    {lists.map(({id, title}) => (
 <li key={id} id={id}>
<NavLink className="movielink" to={`/movies${id}`}>
    {title}
  </NavLink>

 </li>
   ))}
  </nav>

)
};

export default MovieList;



