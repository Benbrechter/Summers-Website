import spotify from '../assets/spotify.png'
import bandcamp from '../assets/bandcamp2.png'

function Distography() {

    return (
     <div className="dis-container">
      <section className="dist-text">
        <h1>Distography</h1>
        <p>I started writing songs at a young age, learning guitar chords from a small waterlogged book and looping cricket sounds on my dad's computer. Gradually, I began to experiment more with recording, and at some point, the music and the artistry took off together. I started creating projects with more intention and personal significance. Through digitally manipulating the quiet background sounds in my bedroom, I’ve found many new ways of making my internal world a bit more tangible.</p>
      </section>
      
      <section>
       <a href="https://open.spotify.com/artist/4iDWF60uB5ChRxy4XybXkS"><img src={spotify} alt="" className="footer-img" /></a> 
       <a href="https://summergozum.bandcamp.com/track/backward"><img src={bandcamp} alt="" className="footer-img" /></a> 
        <div>this will also bring you to a clickable </div>
      </section>
      
     </div>
    )
  }
  
  export default Distography
  