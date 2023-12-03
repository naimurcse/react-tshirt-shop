import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
   return (
      <header className="header">
         <div className="container">
            <nav>
               <Link to="/">Home</Link>
               <Link to="/order">Order Review</Link>
               <Link to="/about">About</Link>
               <Link to="/contact">Contact</Link>
            </nav>
         </div>
      </header>
   );
};

export default Header;
