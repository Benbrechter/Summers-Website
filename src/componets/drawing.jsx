import img1 from "../assets/summers img/image1.jpeg"
import img2 from "../assets/summers img/image4.jpeg"
import img3 from "../assets/summers img/image5.jpeg"
import img4 from "../assets/summers img/image6.jpeg"
import img5 from "../assets/summers img/image8.jpeg"
import img6 from "../assets/summers img/pencil-hands.jpeg"
import img7 from "../assets/summers img/pencil-room.jpeg"
import img8 from "../assets/summers img/tree.jpeg"
import img9 from "../assets/summers img/image9.jpeg"
function Drawing(){

    return(
        <div>
            <h1 className="drawing-h1">Hand Drawn Collection</h1>
         <div className="drawing-section">
            <div className="drawing-container">
                <img src={img1} alt="" className="summers-drawings"/>
                <h1>Sabine</h1>
            </div>
            <div className="drawing-container">
                <img src= {img5} alt="" className="summers-drawings"/>
                <h1>Arm's Width</h1>
            </div>
            <div className="drawing-container">
                <img src={img6} alt="" className="summers-drawings"/>
                <h1>Blue Nails</h1>
            </div>
            <div className="drawing-container">
                <img src= {img4} alt="" className="summers-drawings"/>
                <h1>Hadcock Field</h1>
            </div>
            <div className="drawing-container">
                <img src= {img9} alt="" className="summers-drawings"/>
                <h1>Upturned</h1>
            </div>
            <div className="drawing-container">
                <img src={img3} alt="" className="summers-drawings"/>
                <h1>The Goat Farm</h1>
            </div>
            <div className="drawing-container">
                <img src={img2} alt="" className="summers-drawings"/>
                <h1>Rain Food</h1>
            </div>
            <div className="drawing-container">
                <img src={img7} alt="" className="summers-drawings"/>
                <h1>Big Decision</h1>
            </div>
            <div className="drawing-container">
                <img src={img8} alt="" className="summers-drawings"/>
                <h1>Paper</h1>
            </div>
         </div>
        </div>
    )
}

export default Drawing