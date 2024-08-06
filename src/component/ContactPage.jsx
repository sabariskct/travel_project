import React, { useState } from 'react';
import './ContactPage.css';

// Dummy function for form submission
const submitForm = async (data) => {
  console.log('Form submitted:', data);
  // Simulate a network request with a timeout
  return new Promise((resolve) => setTimeout(resolve, 2000));
};

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '', global: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Validate form data
  const validate = () => {
    let valid = true;
    let errors = { name: '', email: '', message: '' };

    if (!formData.name) {
      errors.name = 'Name is required';
      valid = false;
    }
    if (!formData.email) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      valid = false;
    }
    if (!formData.message) {
      errors.message = 'Message is required';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      try {
        await submitForm(formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } catch (error) {
        console.error('Form submission error:', error);
        setErrors((prev) => ({ ...prev, global: 'An error occurred. Please try again.' }));
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-details">
        <div className="contact-info">
          <h2>Our Office</h2>
          <p>123 Travel Street, Suite 456</p>
          <p>Travel City, TC 12345</p>
          <p>Email: <a href="mailto:info@travelagency.com">info@travelagency.com</a></p>
          <p>Phone: <a href="tel:+11234567890">(123) 456-7890</a></p>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14087.804595239016!2d77.22852962383215!3d28.61393214484706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d45f3e2f7ef%3A0x8f6f621d3a2b1e7!2sIndia%20Gate%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1630253369358!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Map Location"
          ></iframe>
        </div>
      </div>
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        {submitted && !loading && <p className="success-message">Thank you for your message!</p>}
        {errors.global && <p className="error-message">{errors.global}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            aria-required="true"
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-required="true"
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}

          <label htmlFor="message">Message</label>
          <input
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            aria-required="true"
            className={errors.message ? 'error' : ''}
          />
          {errors.message && <p className="error-message">{errors.message}</p>}

          <button type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;