

import { NavLink } from "react-router-dom";
import useFilmListContext from "../hooks/useFilmContext";
import useMovieDetail from "./api-detail";


function MovieList () {
const {lists} = useFilmListContext();

return (

 <nav>
    {lists.map((list) => (
 <li key={list.id} id={list.id}>
<NavLink className="movielink" to={`/movies${list.id}`}>
    {list.title}
  </NavLink>

 </li>
   ))}
  </nav>

)
};

export default MovieList;



