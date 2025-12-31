"use client";
import React, { useState } from "react";

import api from '../apiClient';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await api.sendContact(formData);
      if (!res.ok) {
        setStatus({ type: 'error', message: res.message || 'Submission failed' });
      } else {
        setStatus({ type: 'success', message: res.message || 'Thank you for your message!' });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Network error' });
    }
  };
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            Get in touch with us for any questions or support
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>Get in Touch</h3>
              <p>
                We're here to help and answer any question you might have. 
                We look forward to hearing from you!
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <i className="bx bx-map"></i>
                  <div>
                    <h4>Pakistan Office</h4>
                    <p>195 E Parker Square Dr, Parker, CO 801<br />+92 3456789</p>
                  </div>
                </div>
                
                
                <div className="contact-item">
                  <i className="bx bx-envelope"></i>
                  <div>
                    <h4>Email Us</h4>
                    <p>info@elitemensfashion.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <i className="bx bx-phone"></i>
                  <div>
                    <h4> +923456789 Call Us</h4>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.121169986175!2d73.90618951442687!3d18.568575172551647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c131ed5b54a7%3A0xad718b8b2c93d36d!2sSky%20Vista!5e0!3m2!1sen!2sin!4v1654257749399!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Elite Men's Fashion Location"
              ></iframe>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send us a Message</h3>
            {status && status.type === 'success' && (
              <div className="contact-success">{status.message}</div>
            )}
            {status && status.type === 'error' && (
              <div className="contact-error">{status.message}</div>
            )}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  rows="6"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                <i className="bx bx-send"></i>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
