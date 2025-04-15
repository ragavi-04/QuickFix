import React from 'react'
import './Form.css'
const Form = () => {
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
    <div className='contact-col'>
      <form onSubmit={onSubmit}>
        <label>Your Name</label>
        <input type='text' name='name' placeholder='Enter your name' required />

        <label>Phone Number</label>
        <input type='tel' name='phone' placeholder='Enter your Mobile number' required />

        <label>Address</label>
        <textarea
          name='address'
          rows='4'
          placeholder='Enter your address'
          required
        ></textarea>

        <label>Location</label>
        <input type='text' name='location' placeholder='Enter your location' required />

        <label>Service Category</label>
        <select name='serviceCategory' required>
          <option value='' disabled selected>
            Select a service category
          </option>
          <option value='Home Service'>Home Service</option>
          <option value='Household Service'>Household Service</option>
          <option value='Specialized Service'>Specialized Service</option>
          <option value='Convenience Service'>Convenience Service</option>
          <option value='Others'>Others</option>
        </select>

        <label>No. of Servants Needed</label>
        <input
          type='number'
          name='servantsNeeded'
          placeholder='Enter the number of servants needed'
          min='1'
          required
        />
         <label>Service Details</label>
         <textarea name='message'  rows='6' placeholder='Enter Your Message' required></textarea>

        <button type='submit' className='btn dark-btn'>
          Submit now
        </button>
      </form>
      <span>{result}</span>
    </div>
  );
};

export default Form;