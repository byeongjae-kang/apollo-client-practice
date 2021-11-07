import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/userContext";

const Header = () => {
  const { userState, logoutHandler } = useContext(AuthContext);

  const buttons = userState ? (
    <li onClick={logoutHandler}>
      <Link to="/signin">logout</Link>
    </li>
  ) : (
    <div>
      <li>
        <Link to="/signin">Sign In</Link>
      </li>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
    </div>
  );

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">
          Home
        </Link>
        <ul className="right">{buttons}</ul>
      </div>
    </nav>
  );
};

export default Header;
