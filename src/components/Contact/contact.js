import React, { useRef, useState } from "react";
import "./contact.css";
import resumeImage from "../../assets/resume.png";
import LinkedInIcon from "../../assets/linkedin.png";
import GitHubIcon from "../../assets/github.png";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const resumePdfPath = process.env.PUBLIC_URL + '/resume_master.pdf';

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_76xwzv5', 'template_39ulmnw', form.current, {
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          setFormData({ name: '', email: '', message: '' }); // Reset form data
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <section id="contactPage">
      <div id="resume">
        <h1 className="contactPageTitle">My Resume</h1>
        <a href={resumePdfPath} target="_blank" rel="noreferrer">
          <img src={resumeImage} alt="Resume" className="resumeImg" />
        </a>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name='from_name'
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name='from_email'
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit" className="submitBtn" disabled={!isFormValid}>Submit</button>
          <div className="links">
            <a href="https://www.linkedin.com/in/isaac-thill" target="_blank" rel="noreferrer">
              <img src={LinkedInIcon} alt="LinkedIn" className="link" />
            </a>
            <a href="https://www.github.com/ithill22" target="_blank" rel="noreferrer">
              <img src={GitHubIcon} alt="GitHub" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
