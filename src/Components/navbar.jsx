
import { Link } from 'react-router-dom';
import './navbar.scss'; // Optional for styling

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
                 <ul>
                
                  <li><Link to="/">Home</Link>

                  </li>
                  <li><Link to="/about">About</Link>

                  </li>
                  <li>
                  <Link to="/services">Services</Link>

                  </li>
                  <li><Link to="/contact"> Contact</Link>
                   
                  </li>
                  <li><Link to="/ImageSlider"> Gallery</Link>
                   
                  </li>
                </ul>
              </nav>
              
              </div> 

  );
};

export default Navbar;
