import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link'

function Navbar() {
  function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
   function closeSidebar(){
     const sidebar = document.querySelector('.sidebar')
     sidebar.style.display = 'none'
  }
    return (
      <div>
     <nav className="navbar">
          <Link to="/" className="Summer"><h3>Summer Gozum</h3></Link>

      <div>
        <ul className="nav-links">
          <HashLink smooth to="/#about" className="nav-list"><li>About</li></HashLink>
          <HashLink smooth to="/#distography" className="nav-list"><li>Distography</li></HashLink>
          <HashLink smooth to="/#projects" className="nav-list"><li>Projects</li></HashLink>
          <Link to="/resume" className="nav-list"><li>Resume</li></Link>
          <HashLink smooth to="/#contact" className="nav-list"><li>Contact</li></HashLink>

          <li onClick={ () => showSidebar()} className="dropdown-menu-icon">
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a>
      </li>
        </ul>
      </div>
     </nav>
     {/*------------------ sidebar for media query  -------------------------------------------------------------*/}
     <div className="sidebar">
     <div onClick={ () => closeSidebar()}>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
      </div>
      <Link to="/" className="Summer"><h3>Summer Gozum</h3></Link>

      <div>
          <ul className="nav-links">
            <HashLink smooth to="/#about" className="sidebar-list"><li>About</li></HashLink>
            <HashLink smooth to="/#distography" className="sidebar-list"><li>Distography</li></HashLink>
            <HashLink smooth to="/#projects" className="sidebar-list"><li>Projects</li></HashLink>
            <Link to="/resume" className="nav-list"><li>Resume</li></Link>
            <HashLink smooth to="/#contact" className="sidebar-list"><li>Contact</li></HashLink>
          </ul>
</div>
     </div>
    </div> 
    )
  }
  
  export default Navbar
  