import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FilmProvider from './providers/Film.provider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FilmProvider>
    <App />
    </FilmProvider>
  </StrictMode>,
)

// import { BrowserRouter } from "react-router-dom";

// CreateRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BrowserRouter>
//     <FilmProvider>
//       <App />
//       </FilmProvider>
//     </BrowserRouter>
//   </StrictMode>
// );