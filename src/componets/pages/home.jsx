import About from '../about'
import Projects from '../projects'
import Distography from '../distography'
import Contact from '../contact'
import Drawing from '../drawing'

function Home() {
    return (
        <div>
            <section id='about'>
                <About/>  
            </section>

             <section id='projects'>
                <Projects/>
            </section>

            <section id='distography'>
                <Distography/>
            </section>
           
            <section id='drawings'>
                <Drawing/>
            </section>
            
            <section id='contact'>
                <Contact/>
            </section>
            
            
        </div>
    )
}

export default Home