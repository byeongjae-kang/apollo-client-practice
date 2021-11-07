import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import currentUserQuery from "../queries/currentUser";
import logoutMutation from "../mutation/logout";

const Header = () => {
  const { data } = useQuery(currentUserQuery);
  const [logout] = useMutation(logoutMutation);

  const logoutHandler = () => {
    logout({
      refetchQueries: [{ query: currentUserQuery }]
    });
  };

  const renderButtons = () => {
    if (data?.user) {
      return (
        <li>
          <a href="/" onClick={logoutHandler}>
            logout
          </a>
        </li>
      );
    } else {
      return (
        <div>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </div>
      );
    }
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">
          Home
        </Link>
        <ul className="right">{renderButtons()}</ul>
      </div>
    </nav>
  );
};

export default Header;
