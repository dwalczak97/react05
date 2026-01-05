import { NavLink } from "react-router-dom";


const Navigation = () => {
return(
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movie">Movie</NavLink>
        <NavLink to="/movie/:id">Movie detail</NavLink>
    </nav>
)
};

export default Navigation;