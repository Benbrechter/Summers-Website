
function Contact() {

    return (
      <div>
        <div className="contact-container">
          <div>
            <h1>Lets Talk</h1>
            <h3>these will be socials that are clickable no lie</h3>
          </div>
       
          <div className="form-container">
            <form action="" className="form-detail">
            <label htmlFor="Name" className="label">Name</label>
            <input className = "form-text" type="text" />
            <label htmlFor="email" className="label">Email</label>
            <input type="text" className = "form-text"/>
            <label htmlFor="phone" className="label">Phone</label>
            <input type="text" className = "form-text"/>
            <label htmlFor="header" className="label">What's this regarding</label>
            <input type="text" className = "form-text"/>
            <label htmlFor="message" className="label">Message</label>
            <textarea name="message" id="" className = "form-text2"></textarea>
            <button className="form-btn">Sumbit</button>
          </form>
        </div>
        </div>
      </div>
     
    )
  }
  
  export default Contact
  