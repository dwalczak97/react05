

import { NavLink } from "react-router-dom";
import useFilmListContext from "../hooks/useFilmContext";



function MovieList () {
const {lists} = useFilmListContext();

return (

 <nav>
    {lists.map((list) => (
 <li key={list.id} id={list.id}>
<NavLink className="movielink" to={`/movie/${list.id}`}>
    {list.title}
  </NavLink>

 </li>
   ))}
  </nav>

)
};

export default MovieList;



