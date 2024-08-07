
import art from '../assets/summers img/IMG_6678 2.jpg'

function Distography() {

    return (
     <div className="dis-container">
      <section>
        <h1 className='dist-h1'>Distography</h1>
        <p className="dist-text">I started writing songs at a young age, learning guitar chords from a small waterlogged book and looping cricket sounds on my dad's computer. Gradually, I began to experiment more with recording, and at some point, the music and the artistry took off together. I started creating projects with more intention and personal significance. Through digitally manipulating the quiet background sounds in my bedroom, I’ve found many new ways of making my internal world a bit more tangible.</p>
      </section>
      
      <section className = 'dist-links'>
        <div>
          <a href="https://summergozum.bandcamp.com/track/backward"><img src={art} alt="" className="dist-img1" /></a>
          <p className='backward-txt'>My new single Backward on bandcamp</p>
        </div>
      </section>
      
     </div>
    )
  }
  
  export default Distography
  