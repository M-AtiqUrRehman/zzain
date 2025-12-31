import React from "react";
import { Link } from "react-router-dom";

function Shop() {
  return (
    <section className="shop-section">
      <div className="container">
        <h1 className="shop-title">Shop</h1>
        <p className="shop-description">Explore all products in our online shop and discover new styles.</p>
        {/* Add your shop content here */}
        <Link href="/services" className="btn btn-secondary" style={{marginTop: '2rem'}}>Back to Services</Link>
      </div>
    </section>
  );
}

export default Shop;
