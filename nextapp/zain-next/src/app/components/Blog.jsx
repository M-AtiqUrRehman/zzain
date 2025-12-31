"use client"
import React, { useState } from "react";


function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const blogPosts = [
    {
      id: 1,
      title: "Essential Men's Fashion Trends for 2024",
      excerpt: "Discover the must-have fashion trends that every modern man should know this year.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRbONbnP6UdT7Puqc9ts0WKzEnQaUgS_RapA&s",
      date: "15 March 2024",
      category: "Fashion",
      readTime: "8 min read",
      link: "https://www.gq.com/story/mens-fashion-trends-2024"
    },
    {
      id: 2,
      title: "Building the Perfect Capsule Wardrobe for Men",
      excerpt: "Learn how to create a versatile, timeless wardrobe with just a few key pieces.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX_beUM718mw3EyrP2s8G6khCsvd9h5KirbA&s",
      date: "12 March 2024",
      category: "Fashion",
      readTime: "6 min read",
      link: "https://www.esquire.com/style/mens-fashion/a27134/capsule-wardrobe-guide/"
    }
  ];

  const categories = ["All", "Fashion", "Grooming", "Accessories", "Lifestyle", "Sustainability"];

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <div className="blog-header">
          <p className="blog-subtitle">LATEST ARTICLES</p>
          <h1 className="blog-title">Men's Fashion & Style</h1>
          <button
            onClick={() => window.history.back()}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              margin: '1rem 0',
              display: 'flex',
              alignItems: 'center',
              fontSize: '2rem',
              color: '#333'
            }}
            aria-label="Go Back"
          >
            <span style={{display: 'inline-block', transform: 'rotate(180deg)'}}>&#8594;</span>
          </button>
          <p className="blog-description">
            Discover the latest men's fashion trends, grooming tips, and style guides to elevate your look
          </p>
        </div>

        <div className="blog-filters">
          {categories.map((category, index) => (
            <button 
              key={index} 
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="blog-grid">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <div className="blog-category">{post.category}</div>
                </div>
                
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">
                      <i className="bx bxs-calendar"></i>
                      {post.date}
                    </span>
                    <span className="blog-read-time">
                      <i className="bx bx-time"></i>
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="blog-post-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  
                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="blog-read-more"
                  >
                    Read More
                    <i className="bx bx-right-arrow-alt"></i>
                  </a>
                </div>
              </article>
            ))
          ) : (
            <div className="no-posts">
              <i className="bx bx-search-alt-2"></i>
              <h3>No articles found</h3>
              <p>No articles found in the "{activeCategory}" category. Try selecting a different category.</p>
            </div>
          )}
        </div>

        <div className="blog-cta">
          <h3>Stay Updated with Fashion Trends</h3>
          <p>Subscribe to our newsletter for the latest men's fashion trends, styling tips, and exclusive offers</p>
          <div className="newsletter-signup">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="newsletter-input"
            />
            <button className="btn btn-primary newsletter-btn">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
