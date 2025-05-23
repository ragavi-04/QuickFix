import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "53fe5779-7adf-4b56-864e-aa06eb338245");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
    <div className='contact-col'>
        <h3>Send us a message <img src={msg_icon} alt='' /></h3>
        <p>Feel free to reach out through contact form or find our contact
        information below. Your feedback, questions, and suggestions are 
        important to us as we strive to provide excpetional service to our 
        service community</p>
        <ul>
            <li><img src={mail_icon} alt='' />ragavimurali115@gmail.com</li>
            <li><img src={phone_icon} alt='' />+91 6379442688</li>
            <li><img src={location_icon} alt='' />38 Perumal kovil Street, Minjur <br/> Chennai 601203, TamilNadu</li>
        </ul>
    </div>
    <div className='contact-col'>
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type='text' name='name' placeholder='Enter Your Name' required/>
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter Your mobile number' required/>
            <label>Write Your Message here</label>
            <textarea name='message'  rows='6' placeholder='Enter Your Message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt='' /></button>

        </form>
        <span>{result}</span>
    </div>

    </div>
  )
}

export default Contact