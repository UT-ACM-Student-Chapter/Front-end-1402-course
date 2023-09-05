import { Link } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <div className="header">
      <div className="menuItem">
        <Link to="/">
          <u>Home</u>
        </Link>
      </div>
      <div className="menuItem">
        <Link to="/users">
          <u>Fetch Example</u>
        </Link>
      </div>
      <div className="menuItem">
        <Link to="/axios">
          <u>Axios</u>
        </Link>
      </div>
      <div className="menuItem">
        <Link to="/users/random_id">
          <u> Dynamic Routing</u>
        </Link>
      </div>
      <div className="menuItem">
        <Link to="/hook">
          <u>Custom Hook</u>
        </Link>
      </div>
      <div className="menuItem">
        <Link to="/library">
          <u>UI Library</u>
        </Link>
      </div>
      
    </div>
  );
}

export default Layout;
