
function Contact() {

    return (
      <div>
        <div className="contact-container">
          <div>
            <h1 className = 'contact-header'>Lets Work Together</h1>
            <h3 className = 'contact-text'>Feel free to leave me a message via the form, or you can get a hold of me at summergozum@gmail.com <br /><br />Let's create somethionf beautiful</h3>
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
  