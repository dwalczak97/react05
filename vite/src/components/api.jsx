 import axios from 'axios';
import { useEffect, useState } from 'react'

const useGetMovieList = () =>{
 const [lists, setList] = useState([]);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(false);

useEffect (() => {

const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

const options = {
  headers: {
		// Zamiast api_read_access_token wstaw własny token
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjhkMDgwOThlZjA1YmFjOWNhZjljYmMzZmViNGMzMCIsIm5iZiI6MTc2NzQzMDg5MS4wODA5OTk5LCJzdWIiOiI2OTU4ZGFlYjIwOWQzZGY2ZDZjMzdlZWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dqiDtt4SSJi1TPHScrShjokSKPXDLWrBQGLfMIypJpI'
  }
};

const fetchList = async () =>{
  try{
    setLoading(true);
    const resp = await axios.get(url, options)
    console.log(resp.data.results)
    setList(resp.data.results)
  }
  catch (error) {
    setError(error);
  }
  finally {
    setLoading(false);
  }

};
fetchList();

}, [] );

return {
  lists, loading, error
};

};

export default useGetMovieList;