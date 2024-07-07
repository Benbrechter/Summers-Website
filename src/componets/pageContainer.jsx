import { useState } from 'react';
import Contact from './contact'
import About from './about'
import Projects from './projects'
import Navbar from './nav-bar'

function PageContainer() {
    const [ currentPage, setCurrentPage] = useState('Home')

    const renderPage = () => {
        if (currentPage === 'Home') {
          return <Home handlePageChange={handlePageChange}/>;
        }
        if (currentPage === 'Projects') {
          return <Projects />;
        }
        if (currentPage === 'About'){
            return < About />
        }
        if (currentPage === 'Contact'){
            return < Contact />
        }
      };

      const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div className='page-container'>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <main >{renderPage()}</main>
      <footer><Connections/></footer>
    </div>
    );
}

export default PageContainer