import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./pages/home"
import Resume from "./pages/Resume"
import Contact from "./contact"
import Navbar from './nav-bar'
import Footer from "./footer"

function PageContainer() {
    
    return (
        <div>
            <Navbar/>
            <div>
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                </Routes>
            </div>
            <Contact/>
            <Footer/>
        </div>
    )
}
 export default PageContainer