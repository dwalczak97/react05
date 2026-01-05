 import axios from 'axios';
import { useEffect, useState } from 'react'

const useGetMovie = (id) => {
    const [movie,setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
useEffect (() => {

const urlTwo = `https://api.themoviedb.org/3/movie/550`;

const optionsTwo = {
  headers: {
		// Zamiast api_read_access_token wstaw własny token
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjhkMDgwOThlZjA1YmFjOWNhZjljYmMzZmViNGMzMCIsIm5iZiI6MTc2NzQzMDg5MS4wODA5OTk5LCJzdWIiOiI2OTU4ZGFlYjIwOWQzZGY2ZDZjMzdlZWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dqiDtt4SSJi1TPHScrShjokSKPXDLWrBQGLfMIypJpI'
  }
};

const fetchMovie = async (id) =>{
  try{
    setLoading(true);
    const respMovie = await axios.get( urlTwo, optionsTwo)
    console.log(respMovie.data)
    setMovie(respMovie.data)
  }
  catch (error) {
    setError(error);
  }
  finally {
    setLoading(false);
  }

};
fetchMovie();
}, [] );
console.log(movie)
return {
  movie, loading, error
};

};

export default useGetMovie;










