// Navigation.jsx
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="global-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/newsfeed">Newsfeed</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Navigation;