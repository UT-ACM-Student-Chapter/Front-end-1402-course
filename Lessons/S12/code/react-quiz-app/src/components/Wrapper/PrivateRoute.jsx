import PropTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  useEffect(() => {
    if (!username) {
      navigate("/register");
    }
  }, [username]);
  return children;
}

PrivateRoute.propTypes = {
  children: PropTypes.any,
};

export default PrivateRoute;
