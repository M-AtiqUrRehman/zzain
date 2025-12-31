"use client"
import React from "react";
import Link from 'next/link';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="https://i.postimg.cc/htGyQ4JB/footer-logo.png" alt="Elite Men's Fashion Logo" />
            </div>
            <p className="footer-description">
              The customer is at the heart of our unique business model, which includes design.
              We create premium fashion that empowers confidence and style.
            </p>
            <div className="payment-methods">
              <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="Payment Methods" />
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">SHOPPING</h4>
            <ul className="footer-links">
              <li><Link href="/products">Clothing Store</Link></li>
              <li><Link href="/products">Trending Shoes</Link></li>
              <li><Link href="/products">Accessories</Link></li>
              <li><Link href="/products">Sale</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">CUSTOMER SERVICE</h4>
            <ul className="footer-links">
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Size Guide</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Return Policy</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">NEWSLETTER</h4>
            <p className="newsletter-text">
              Be the first to know about new arrivals, look books, sales & promos!
            </p>
            <form className="newsletter-form">
              <div className="newsletter-input">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  required 
                />
                <button type="submit" className="newsletter-btn">
                  <i className="bx bx-envelope"></i>
                </button>
              </div>
            </form>
            <div className="social-links">
              <a href="#" aria-label="Facebook" className="social-link">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="#" aria-label="Pinterest" className="social-link">
                <i className="bx bxl-pinterest"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Elite Men's Fashion. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;