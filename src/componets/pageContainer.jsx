import Home from "./pages/home"
import Resume from "./pages/Resume"

function pageContainer() {
    
    return (
        <div>
            <Navbar/>
            <div>
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                </Routes>
            </div>
        </div>
    )
}

export default pageContainer