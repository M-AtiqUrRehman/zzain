"use client"
import React from "react";
import Link from 'next/link';


function Home() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-subtitle">SUMMER COLLECTION</p>
            <h1 className="hero-title">
              FALL - WINTER<br />
              Collection 2024
            </h1>
            
            <div className="hero-description">
              <p>
                A specialist label creating luxury essentials. Ethically crafted
                with an unwavering commitment to exceptional quality.
              </p>
            </div>

            <div className="hero-actions">
              <Link href="/products" className="btn btn-primary hero-btn">
                SHOP NOW
                <i className="bx bx-right-arrow-alt"></i>
              </Link>
              
              <Link href="/collection" className="btn btn-secondary">
                VIEW COLLECTION
              </Link>
            </div>

            <div className="hero-social">
              <a href="#" aria-label="Facebook" className="social-link">
                <i className="bx bxl-facebook"></i>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                style={{ backgroundColor: '#1DA1F2' }}
                className="social-link"
              >
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#" aria-label="Pinterest" className="social-link">
                <i className="bx bxl-pinterest"></i>
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <i className="bx bxl-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <img 
              src="https://i.postimg.cc/t403yfn9/home2.jpg" 
              alt="Elite Men's Fashion Collection" 
              className="hero-img"
            />
          </div>
        </div>
      </div>
      
      <div className="container mt-5">
        <div className="home-summary grid grid-4">
          <div className="card">
            <img className="card-img" src="https://images.unsplash.com/photo-1520975914-79b33e8e1e59?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=aaa" alt="services" />
            <div className="card-body">
              <h3 className="card-title">Services</h3>
              <p className="card-text">View our service offerings for Collections, Shop and Blog.</p>
              <Link href="/services" className="btn btn-secondary">Explore Services</Link>
            </div>
          </div>

          <div className="card">
            <img className="card-img" src="https://images.unsplash.com/photo-1529148482759-b35b25c76a10?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=bbb" alt="about" />
            <div className="card-body">
              <h3 className="card-title">About Us</h3>
              <p className="card-text">Learn who we are and the story behind our label.</p>
              <Link href="/about" className="btn btn-secondary">About Us</Link>
            </div>
          </div>

          <div className="card">
            <img className="card-img" src="https://images.unsplash.com/photo-1532074205216-d0e1f2a26b7d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=ccc" alt="contact" />
            <div className="card-body">
              <h3 className="card-title">Contact</h3>
              <p className="card-text">Get in touch with questions, support and orders.</p>
              <Link href="/contact" className="btn btn-secondary">Contact</Link>
            </div>
          </div>

          <div className="card">
            <img className="card-img" src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=ddd" alt="dashboard" />
            <div className="card-body">
              <h3 className="card-title">Dashboard</h3>
              <p className="card-text">Manage products, add new items and view sales from the dashboard.</p>
              <Link href="/dashboard" className="btn btn-secondary">Open Dashboard</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;