"use client"
import React from "react";
import Link from 'next/link';


function Collection() {
  const collections = [
    {
      id: 1,
      title: "Clothing Collections",
      description: "Premium shirts, jackets, and suits",
      image: "https://i.postimg.cc/Xqmwr12c/clothing.webp",
      link: "/products"
    },
    {
      id: 2,
      title: "Shoes Spring",
      description: "Latest footwear trends",
      image: "https://i.postimg.cc/8CmBZH5N/shoes.webp",
      link: "/products"
    },
    {
      id: 3,
      title: "Accessories",
      description: "Complete your look",
      image: "https://i.postimg.cc/MHv7KJYp/access.webp",
      link: "/products"
    }
  ];

  return (
    <section id="collection" className="collection-section">
      <div className="container">
        <div className="collection-header">
          <h1 className="collection-title">Our Collections</h1>
          <p className="collection-subtitle">
            Discover our curated selection of premium men's fashion
          </p>
        </div>

        <div className="collections-grid">
          {collections.map((collection) => (
            <div key={collection.id} className="collection-card">
              <div className="collection-image">
                <img src={collection.image} alt={collection.title} />
                <div className="collection-overlay">
                  <div className="collection-content">
                    <h3 className="collection-card-title">{collection.title}</h3>
                    <p className="collection-card-description">{collection.description}</p>
                    <Link href={collection.link} className="btn btn-primary collection-btn">
                      SHOP NOW
                      <i className="bx bx-right-arrow-alt"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="collection-cta">
          <h2>Ready to Elevate Your Style?</h2>
          <p>Explore our complete range of premium men's fashion</p>
          <Link href="/products" className="btn btn-secondary">
            View All Products
          </Link>
        </div>
      </div>

    </section>
  );
}

export default Collection;