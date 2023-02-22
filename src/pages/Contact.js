import { useState } from 'react';

function Contact() {

  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    access_key: 'e60801c3-6aac-4656-8f05-556b65a184a0' /*used web3form for getting user inputs from form*/
  })

  const handleChange = (event) => {

    setFormData({
      ...formData,
      [event.target.name]: event.target.value /*getting input from each part of the form*/
    });

  }

  const handleSubmit = (event) => {

    event.preventDefault();


    const data = JSON.stringify(formData);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: data
    })
      .then(res => res.json())
      .then(data => {
        setSuccess(true);
        setFormData({
          ...formData,
          name: '',
          email: '',
          message: '',
        })

        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch(err => console.log(err));

  };



  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>
          What Do You Think About This App?
        </h3>

        <input name='name'
          value={formData.name}
          onChange={handleChange}
          type="text"
          placeholder="Name">
        </input>

        <input name='email'
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="Email">
        </input>

        <input name='message'
          value={formData.message}
          onChange={handleChange}
          as="textarea" rows = {4}
          placeholder="Message">
        </input>

        <button type="submit">
          Submit
        </button>


      </form>

      {success && <p className='success'>Message Sent!</p>}  {/*this appears at the bottom for 3s to confirm to users that form has been successfully submitted*/}



    </>
  );
}

export default Contact;
