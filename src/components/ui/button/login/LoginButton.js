import { Link } from "react-router-dom";

import "../css/LoginButton.css";

const LoginButton = () => {
  return (
    <>
      <Link to="/logged-in-page">
        <button className="button">Login</button>
      </Link>
    </>
  );
};

export { LoginButton };
