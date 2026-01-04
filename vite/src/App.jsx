
import './App.css'

import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage.jsx';
import Movie from './pages/MoviesPage.jsx';
import NotFound from './pages/Not found.jsx';


function App() {



  return (
    <>
<Routes>
  <Route path='/' element={<Home />}></Route>
  <Route path='/movie' element={<Movie />}></Route>
  <Route path='*' element={<NotFound/>}></Route>
</Routes>
    </>
  )
}

export default App


