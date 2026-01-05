
import './App.css'

import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage.jsx';
import Movie from './pages/MoviesPage.jsx';
import NotFound from './pages/Not found.jsx';
import Navigation from './components/Navigation.jsx';
import MovieDetail from './pages/MovieDetailsPage.jsx';


function App() {



  return (
    <>
    <Navigation/>
<Routes>
  <Route path='/' element={<Home />}></Route>
  <Route path='/movie' element={<Movie />}></Route>
  <Route path="/movie/:id" element={<MovieDetail />}></Route>
  <Route path='*' element={<NotFound/>}></Route>
</Routes>
    </>
  )
}

export default App


