import React from "react";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>About</h4>
            <p>Elite Men's Fashion is a demo shop created for the migration example.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/collection">Collection</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <p>support@example.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Elite Men's Fashion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
