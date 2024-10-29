import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    alert(`Thank you for reaching out, ${name}!`);
  };

  return (
    <MDBContainer className="contact-container">
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <h2 className="text-center mb-4">CONTACT ME</h2>
          <p className="text-center mb-4">If you have any questions, feel free to reach out!</p>
          <form onSubmit={handleSubmit}>
            <MDBInput
              className="mb-4"
              label="Name"
              id="form1"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <MDBInput
              className="mb-4"
              label="Email"
              id="form2"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <MDBInput
              className="mb-4"
              label="Message"
              id="form3"
              type="textarea"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <MDBBtn className="mb-4" color="primary" type="submit">
              Send Message <MDBIcon icon="paper-plane" className="ms-2" />
            </MDBBtn>
          </form>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <MDBIcon fab icon="facebook-f" className="me-3" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <MDBIcon fab icon="twitter" className="me-3" />
            </a>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <MDBIcon fab icon="google" className="me-3" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <MDBIcon fab icon="instagram" className="me-3" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <MDBIcon fab icon="linkedin" className="me-3" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Contact;

