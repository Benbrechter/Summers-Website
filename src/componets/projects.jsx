import txVase from '../assets/texas-vase1.jpg'
import mateSet from '../assets/roomate-set1.jpg'
import daughters from '../assets/Daughters.jpg'
import sea from '../assets/by-the-sea2.jpg'

function Projects() {

    return (
      <div className="project-container">
        <h1 className='project-h1'>Projects</h1>

        <div className="revolving-boxes">

         <div className="projects-box">
          <img src={txVase} alt=""  className='project-img'/>
          <h1 className='project-headers'>Texas Vase</h1>
         </div>
         <div className="projects-box">
          <img src={mateSet} alt="" className='project-img'/>
          <h1 className='project-headers'>Roommate Set</h1>
         </div>
         <div className="projects-box">
          <img src={daughters} alt="" className='project-img'/>
           <h1 className='project-headers'>Daughters</h1>
         </div>
         <div className="projects-box">
          <img src={sea} alt="" className='project-img'/>
          <h1 className='project-headers'>By the Sea</h1>
         </div>

        </div>
      </div>
    )
  }
  
  export default Projects
  