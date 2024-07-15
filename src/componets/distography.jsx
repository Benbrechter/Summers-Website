import spotify from '../assets/spotify.png'

function Distography() {

    return (
     <div className="dis-container">
      <section className="dist-text">
        <h1>Distography</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet libero, qui commodi ratione dignissimos unde fugiat provident culpa accusantium sapiente quae officia ad animi voluptatum pariatur ipsa sint. In, non.</p>
      </section>
      
      <section>
       <a href="https://open.spotify.com/artist/4iDWF60uB5ChRxy4XybXkShttps://open.spotify.com/artist/4iDWF60uB5ChRxy4XybXkS"><img src={spotify} alt="" className="footer-img" /></a> 
        <div>this will also bring you to a clickable </div>
      </section>
      
     </div>
    )
  }
  
  export default Distography
  