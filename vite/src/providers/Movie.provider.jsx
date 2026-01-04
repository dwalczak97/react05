
import useGetMovie from "../components/api-detail";
import movieContext from "../context/MovieDetailContext";

function MovieProvider ({children}) {
 const  {movie, loading, error} = useGetMovie();

 return <movieContext.Provider value={ {movie, loading, error} }>{children}</movieContext.Provider>
};

export default MovieProvider;