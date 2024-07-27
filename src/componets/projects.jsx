import txVase from '../assets/texas-vase1.jpg'
import mateSet from '../assets/roomate-set1.jpg'
import daughters from '../assets/Daughters.jpg'
import sea from '../assets/by-the-sea2.jpg'

function Projects() {

    return (
      <div className="project-container">
        <h1 style={{marginBottom: "0px"}}>Projects</h1>

        <div className="revolving-boxes">

         <div className="projects-box"> 
          <h1 className='project-headers'>Texas Vase</h1>
          <img src={txVase} alt=""  className='project-img'/>
         </div>
         <div className="projects-box">
          <h1 className='project-headers'>Roommate Set</h1>
          <img src={mateSet} alt="" className='project-img'/>
         </div>
         <div className="projects-box">
          <h1 className='project-headers'>Daughters</h1>
          <img src={daughters} alt="" className='project-img'/>
         </div>
         <div className="projects-box">
          <h1 className='project-headers'>By the Sea</h1>
          <img src={sea} alt="" className='project-img'/>
         </div>

        </div>
      </div>
    )
  }
  
  export default Projects
  