//  import { NavLink } from "react-router-dom";
//  import { Routes, Route } from "react-router-dom;

import useFilmListContext from "../hooks/useFilmContext";


function MovieList ({obj}) {
const {lists} = useFilmListContext()
// const imageBaseUrl = `https://image.tmdb.org/t/p/w500/`;

return (

   <ul>
//    {lists.map(({id, title}) => (
    <li key={id}><p>{title}</p></li>
   ))}
</ul>
//  <nav>
//     {lists.map(({id, title, backdrop_path}) => (
//  <li key={id} id={id}><NavLink className="movielink" to={`/movies${id}`}>
//     {title}
//     {/* <img className="imgsmall" 
//     src={`${imageBaseUrl}${backdrop_path}`}
//     alt={title}/>  */}


//  </NavLink>

//  </li>
//    ))}
//   </nav>

)
};





export default MovieList;

//   <ul>
//         {list.map((movie) => (
//           <li key={movie.id} id={movie.id}>
//             <NavLink className="movieContainer" to={`/movies/${movie.id}`}>
//               {movie.title}
//               <img
//                 className="imgSmall"
//                 src={`${imageBaseURL}${movie.poster_path}`}
//                 alt={movie.title}
//               />
//             </NavLink>
//             <hr />
//           </li>
//         ))}
//       </ul>
//     <ul>
//    {obj.map(({id, title}) => (
//     <li key={id}><p>{title}</p></li>
//    ))}
   
// </ul>

