import { useState } from "react";
import useGetMovieList from "../components/api";
import filmContext from "../context/FilmListContext";

function FilmProvider ({children}) {
 const  {lists, loading, error} = useGetMovieList();

 return <filmContext.Provider value={ {lists, loading, error} }>{children}</filmContext.Provider>
};

export default FilmProvider;