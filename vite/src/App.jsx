import { useEffect, useState } from 'react'
// import {fetchList}from './components/api.jsx'
import './App.css'
import axios from 'axios';

function App() {
  const [list, setList] = useState(0)

  useEffect(() => {


const url = '<https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1>';

const options = {
  headers: {
		// Zamiast api_read_access_token wstaw własny token
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjhkMDgwOThlZjA1YmFjOWNhZjljYmMzZmViNGMzMCIsIm5iZiI6MTc2NzQzMDg5MS4wODA5OTk5LCJzdWIiOiI2OTU4ZGFlYjIwOWQzZGY2ZDZjMzdlZWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dqiDtt4SSJi1TPHScrShjokSKPXDLWrBQGLfMIypJpI'
  }
};


async function fetchList () {
  const resp = await axios.get(url, options)
  .then(response =>
 console.log(response))
  .catch(err => console.error(err)); 
  return resp;
  }
fetchList();
  }, [])
  return (
    <>
      
   <div></div>
    </>
  )
}

export default App
