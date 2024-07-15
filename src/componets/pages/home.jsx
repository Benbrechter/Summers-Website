import About from '../about'
import Projects from '../projects'
import Distography from '../distography'
import Contact from '../contact'

function Home() {
    return (
        <div>
            <section id='about'>
                <About/>  
            </section>
            <section id='distography'>
                <Distography/>
            </section>
            <section id='projects'>
                <Projects/>
            </section>
            <section id='contact'>
                <Contact/>
            </section>
            
            
        </div>
    )
}

export default Home