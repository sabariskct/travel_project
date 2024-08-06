// src/About.js
import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [faqOpen, setFaqOpen] = useState({});
  const [scrolling, setScrolling] = useState(0);

  const toggleFaq = (index) => {
    setFaqOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleScroll = () => {
    setScrolling(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const teamMembers = [
    {
      name: 'John Doe',
      title: 'CEO',
      image: '/path-to-image.jpg',
      description: 'John has over 20 years of experience in the industry.',
      social: {
        linkedin: 'https://linkedin.com/in/johndoe',
        twitter: 'https://twitter.com/johndoe'
      }
    },
    {
      name: 'Jane Smith',
      title: 'CTO',
      image: '/path-to-image.jpg',
      description: 'Jane is a technology visionary with a passion for innovation.',
      social: {
        linkedin: 'https://linkedin.com/in/janesmith',
        twitter: 'https://twitter.com/janesmith'
      }
    },
    // Add more team members as needed
  ];

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer a wide range of services including web development, mobile app development, and more.',
    },
    {
      question: 'How can I contact you?',
      answer: 'You can contact us via email at contact@example.com or call us at (123) 456-7890.',
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <section className="about-section">
        <div className="about-content">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide the best service and products to our customers.
          </p>
        </div>
        <div className="about-content">
          <h2>Our Vision</h2>
          <p>
            We aim to innovate and lead the market with our cutting-edge solutions.
          </p>
        </div>
      </section>
      <section className="values-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <h3>Integrity</h3>
            <p>We uphold the highest standards of integrity in all of our actions.</p>
          </div>
          <div className="value-item">
            <h3>Customer Commitment</h3>
            <p>We develop relationships that make a positive difference in our customers' lives.</p>
          </div>
          <div className="value-item">
            <h3>Quality</h3>
            <p>We provide outstanding products and unsurpassed service that, together, deliver premium value to our customers.</p>
          </div>
          <div className="value-item">
            <h3>Teamwork</h3>
            <p>We work together, across boundaries, to meet the needs of our customers and to help the company win.</p>
          </div>
        </div>
      </section>
      <section className="history-section">
        <h2>Our History</h2>
        <div className="history-timeline">
          <div className="timeline-item">
            <h3>2000</h3>
            <p>Company founded by John Doe and Jane Smith.</p>
          </div>
          <div className="timeline-item">
            <h3>2005</h3>
            <p>Expanded our services to include mobile app development.</p>
          </div>
          <div className="timeline-item">
            <h3>2010</h3>
            <p>Reached a milestone of 1,000 satisfied customers.</p>
          </div>
          <div className="timeline-item">
            <h3>2020</h3>
            <p>Launched our AI-driven solutions to the market.</p>
          </div>
        </div>
      </section>
      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.title}</p>
              <p className="team-description">{member.description}</p>
              <div className="social-links">
                {member.social.linkedin && <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
                {member.social.twitter && <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index} onClick={() => toggleFaq(index)}>
            <h3>{faq.question}</h3>
            {faqOpen[index] && <p>{faq.answer}</p>}
          </div>
        ))}
      </section>
      <footer className="about-footer">
        <p>&copy; 2024 Our Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;