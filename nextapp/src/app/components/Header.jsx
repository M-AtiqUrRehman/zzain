import React from "react";

function Header() {
  return (
    <section className="top-banner">
      <div className="banner-container">
        <div className="banner-content">
          <p className="banner-text">
            <i className="bx bx-truck"></i>
            Free shipping on orders over $50
          </p>
          <p className="banner-text">
            <i className="bx bx-shield"></i>
            30-day return guarantee
          </p>
        </div>
        
        <div className="banner-actions">
          <a href="#newsletter" className="banner-link">
            <i className="bx bx-envelope"></i>
            Newsletter
          </a>
          <a href="#contact" className="banner-link">
            <i className="bx bx-phone"></i>
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}

export default Header;
