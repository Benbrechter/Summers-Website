import img from '../assets/placeholder.jpg'

function About() {

    return (
      <div className="about-container">
        <div>
        <img src={img} alt="" />
        <h2>Artist</h2>
        </div>
        

        <div className="about-text-container">

          <h1 className='about-header'>Summmer Gozum</h1>   
          <p className='about-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos facere id iusto aperiam, quis velit asperiores sed non obcaecati illo doloremque amet distinctio explicabo iure nam quibusdam sapiente? Aspernatur, maxime.</p>   
        </div>
      </div>
    )
  }
  
  export default About
  