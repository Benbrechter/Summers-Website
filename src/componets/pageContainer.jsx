import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./pages/home"
import Resume from "./pages/Resume"
import Contact from "./contact"
import Navbar from './nav-bar'

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
        </div>
    )
}
 export default PageContainer