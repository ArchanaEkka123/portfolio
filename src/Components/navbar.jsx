import { Link } from "react-router-dom";
import "./navbar.scss"; // Optional for styling

const Navbar = () => {
  return (
    <div className="nav">
      <nav className="navbar">
        <img
          class="nav_icon"
          src="/images/A_logo.svg"
          alt="Description of the image"
          width={90}
          height={90}
        />
        <ul className="nav_ul ">
          <li className="hover:animate-bounce text-black-900 text-4xl font-semibold">
            <Link to="/" className="nav_content  ">
              Home
            </Link>
          </li>
          <li className="hover:animate-bounce text-black-900 text-4xl font-semibold">
            <Link to="/" className="nav_content  ">
              About Me
            </Link>
          </li>
          <li className="hover:animate-bounce text-black-900 text-4xl font-semibold">
            <Link to="/" className="nav_content  ">
              Services
            </Link>
          </li>
          <li className="hover:animate-bounce text-black-900 text-4xl font-semibold">
            <Link to="/serviceS" className="nav_content">
              Projects
            </Link>
          </li>

          <li className="hover:animate-bounce text-black-900 text-4xl font-semibold">
            <Link to="/contactform" className="nav_content">
              {" "}
              Contact
            </Link>
          </li>
        </ul>
        <button className="nav-button">Hire me</button>
      </nav>
    </div>
  );
};

export default Navbar;
