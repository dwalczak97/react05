import { useEffect, useState } from 'react'
// import {fetchList}from './components/api.jsx'
import './App.css'
import axios from 'axios';

function App() {
  const [lists, setList] = useState([])

  useEffect(() => {


const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

const options = {
  headers: {
		// Zamiast api_read_access_token wstaw własny token
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjhkMDgwOThlZjA1YmFjOWNhZjljYmMzZmViNGMzMCIsIm5iZiI6MTc2NzQzMDg5MS4wODA5OTk5LCJzdWIiOiI2OTU4ZGFlYjIwOWQzZGY2ZDZjMzdlZWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dqiDtt4SSJi1TPHScrShjokSKPXDLWrBQGLfMIypJpI'
  }
};


async function fetchList () {
  const resp = await axios.get(url, options)
  // return resp;
  console.log(resp.data.results)
  setList(resp.data.results)

  }
fetchList();
  }, []);

  return (
    <>
      <ul>
   {lists.map(({id, title}) => (
    <li key={id}><p>{title}</p></li>
   ))}
   
</ul>
    </>
  )
}

export default App
