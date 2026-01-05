
import useGetMovie from "../components/api-detail";
import movieContext from "../context/MovieContext";

function MovieProvider ({children}) {
 const  {movie, loading, error} = useGetMovie();

 return <movieContext.Provider value={ {movie, loading, error} }>{children}</movieContext.Provider>
};

export default MovieProvider;