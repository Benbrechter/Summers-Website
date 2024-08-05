import summer from '../assets/summers img/summer.png'

function About() {

    return (
      <div className="about-container">
        <div className="about-text-container">
          <img src={summer} alt="summer" /> 
          <h1 className='title'> Musician, <br /> Artist</h1>
        </div>
      </div>
    )
  }
  
  export default About
  