import { useEffect, useState } from 'react'
import  useGetMovieList from './components/api.jsx'
import './App.css'
import MovieList from './components/MovieList.jsx';

// import { Routes, Route } from "react-router-dom";

function App() {
const {lists, loading, error} = useGetMovieList();


  return (
    <>


    <MolieList lists={lists}/>
{/*   
  <Routes>
        <Route path="/" element={<MovieList/>} />
  </Routes> */}
    </>
  )
}

export default App


