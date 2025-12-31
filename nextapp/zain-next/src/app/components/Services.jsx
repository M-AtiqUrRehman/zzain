"use client"
import React from 'react';
import Link from 'next/link';

function Services() {
  return (
    <section className="services-page container">
      <div className="services-header text-center mb-4">
        <h2>Our Services</h2>
        <p className="lead">We provide full-store management & e-commerce services. Explore our pages below.</p>
      </div>

      <div className="grid grid-3 services-grid">
        <div className="card">
          <img className="card-img" src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=111" alt="collections" />
          <div className="card-body">
            <h3 className="card-title">Collections</h3>
            <p className="card-text">Browse our seasonal collections and curated outfits.</p>
            <Link href="/collection" className="btn btn-primary">Open Collections</Link>
          </div>
        </div>

        <div className="card">
          <img className="card-img" src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=222" alt="shop" />
          <div className="card-body">
            <h3 className="card-title">Shop</h3>
            <p className="card-text">Explore all products in our online shop and discover new styles.</p>
            <Link href="/products" className="btn btn-primary">Open Shop</Link>
          </div>
        </div>

        <div className="card">
          <img className="card-img" src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=333" alt="blog" />
          <div className="card-body">
            <h3 className="card-title">Blog</h3>
            <p className="card-text">Read our latest articles on fashion, trends, and style tips.</p>
            <Link href="/blog" className="btn btn-primary">Open Blog</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
