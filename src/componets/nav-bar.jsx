import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link'

function Navbar() {

    return (
     <nav className="navbar">
          <Link to="/" className="Summer"><h3>Summer Gozum</h3></Link>

      <div>
        <ul className="nav-links">
          <HashLink smooth to="/#about" className="nav-list"><li>About</li></HashLink>
          <HashLink smooth to="/#distography" className="nav-list"><li>Distography</li></HashLink>
          <HashLink smooth to="/#projects" className="nav-list"><li>Projects</li></HashLink>
          <Link to="/resume" className="nav-list"><li>Resume</li></Link>
          <HashLink smooth to="/#contact" className="nav-list"><li>Contact</li></HashLink>
        </ul>
      </div>
     </nav>
    )
  }
  
  export default Navbar
  