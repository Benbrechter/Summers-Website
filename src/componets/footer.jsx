import instagram from "../assets/instagram.png"
import Spotify from "../assets/spotify.png"
import twitter from "../assets/twitter.png"

function Footer(){
    return(
        <div>
            <div className="line"></div>
            <div className="icon-container">
                <a href="https://www.instagram.com/choomerr/"><img src={instagram} alt="Insta" className="footer-img"/> </a>
                <a href="https://open.spotify.com/artist/4iDWF60uB5ChRxy4XybXkS"><img src= {Spotify} alt="Email" className="footer-img"/></a>
                <img src= {twitter} alt="Other things" className="footer-img"/> 
            </div>
        </div>
    )
}

export default Footer