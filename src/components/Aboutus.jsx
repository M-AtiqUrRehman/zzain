import React from "react";


function AboutUs() {
  const features = [
    {
      icon: "bx bx-t-shirt",
      title: "Premium Quality",
      description: "We source only the finest materials and work with skilled artisans to create garments that last."
    },
    {
      icon: "bx bx-trending-up",
      title: "Trending Styles",
      description: "Stay ahead of fashion with our curated collection of contemporary and timeless pieces."
    },
    {
      icon: "bx bx-heart",
      title: "Customer First",
      description: "Your satisfaction is our priority. We provide exceptional service and support at every step."
    },
    {
      icon: "bx bx-shield",
      title: "Sustainable Fashion",
      description: "We're committed to ethical practices and sustainable fashion for a better future."
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "50+", label: "Countries Served" },
    { number: "5+", label: "Years Experience" },
    { number: "99%", label: "Customer Satisfaction" }
  ];

  return (
    <div className="about-container">
      <div className="about-hero">
        <div className="container">
          <h1 className="about-title">About Us</h1>
          <p className="about-subtitle">Redefining Men's Fashion with Confidence & Style</p>
        </div>
      </div>

      <div className="about-content">
        <div className="container">

          <div className="about-grid">
            <div className="about-text">
              <section className="about-section">
                <h2>Our Story</h2>
                <p>
                  Founded with passion for modern style, <strong>Elite Men's Fashion</strong> 
                  brings you a premium collection of clothing and accessories designed for 
                  the confident man. Our journey began with one mission — to make every man 
                  look and feel his best.
                </p>
              </section>

              <section className="about-section">
                <h2>Our Mission</h2>
                <p>
                  To empower men through fashion by blending timeless classics with 
                  contemporary trends. We believe style is not just about clothing — 
                  it's about confidence, attitude, and individuality.
                </p>
              </section>

              <section className="about-section">
                <h2>Our Vision</h2>
                <p>
                  To become the most trusted men's fashion brand that defines 
                  sophistication and inspires self-expression worldwide.
                </p>
              </section>
            </div>

            <div className="about-image">
              <img 
                src="https://i.postimg.cc/t403yfn9/home2.jpg" 
                alt="Elite Men's Fashion Team" 
                className="about-img"
              />
            </div>
          </div>

          <div className="features-section">
            <h2 className="features-title">Why Choose Us</h2>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">
                    <i className={feature.icon}></i>
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="stats-section">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="values-section">
            <h2 className="values-title">Our Values</h2>
            <div className="values-content">
              <div className="value-item">
                <h3>Quality First</h3>
                <p>We never compromise on quality. Every piece is crafted with attention to detail and built to last.</p>
              </div>
              <div className="value-item">
                <h3>Customer Centric</h3>
                <p>Our customers are at the heart of everything we do. We listen, learn, and continuously improve.</p>
              </div>
              <div className="value-item">
                <h3>Innovation</h3>
                <p>We embrace new trends and technologies while staying true to timeless style principles.</p>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default AboutUs;