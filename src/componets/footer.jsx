import instagram from "../assets/instagram.png"
import email from "../assets/email.png"
import twitter from "../assets/twitter.png"

function Footer(){
    return(
        <div>
            <div className="line"></div>
            <div className="icon-container">
                <img src={instagram} alt="Insta" className="footer-img"/> 
                <img src= {email} alt="Email" className="footer-img"/>
                <img src= {twitter} alt="Other things" className="footer-img"/> 
            </div>
        </div>
    )
}

export default Footer