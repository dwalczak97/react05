 import axios from 'axios';

const fetchOneMovie = async (id) =>{
  const urlTwo = `https://api.themoviedb.org/3/movie/${id}`;
console.log(id)
const optionsTwo = {
  headers: {
		// Zamiast api_read_access_token wstaw własny token
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjhkMDgwOThlZjA1YmFjOWNhZjljYmMzZmViNGMzMCIsIm5iZiI6MTc2NzQzMDg5MS4wODA5OTk5LCJzdWIiOiI2OTU4ZGFlYjIwOWQzZGY2ZDZjMzdlZWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dqiDtt4SSJi1TPHScrShjokSKPXDLWrBQGLfMIypJpI'
  }
};

  const respOneMovie = await axios.get(urlTwo, optionsTwo);
  return respOneMovie;

}

export default fetchOneMovie;