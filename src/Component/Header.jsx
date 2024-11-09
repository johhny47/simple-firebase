import { NavLink, Outlet } from "react-router-dom";


const Header = () => {
    return (
        
       
              <div>
              <NavLink to="/">Home</NavLink>
             <NavLink to="/login">Log in</NavLink>
               </div>
        
    );
};

export default Header;