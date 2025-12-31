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
    },
    {
      id: 3,
      title: "Men's Grooming Essentials: Complete Guide",
      excerpt: "Master the art of men's grooming with our comprehensive guide to looking your best.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&h=300&fit=crop",
      date: "10 March 2024",
      category: "Grooming",
      readTime: "10 min read",
      link: "https://www.menshealth.com/style/a19516767/mens-grooming-guide/"
    },
    {
      id: 4,
      title: "How to Choose the Right Suit for Every Occasion",
      excerpt: "Navigate the world of men's suits with confidence. Find the perfect fit for any event.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
      date: "8 March 2024",
      category: "Fashion",
      readTime: "7 min read",
      link: "https://www.gq.com/story/how-to-buy-a-suit-guide"
    },
    {
      id: 5,
      title: "Men's Accessories That Make a Statement",
      excerpt: "Elevate your style with the right accessories. Watches, ties, and more.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=300&fit=crop",
      date: "5 March 2024",
      category: "Accessories",
      readTime: "5 min read",
      link: "https://www.esquire.com/style/mens-accessories/"
    },
    {
      id: 6,
      title: "Smart Casual: Dressing for the Modern Workplace",
      excerpt: "Master the art of smart casual dressing for today's flexible work environment.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXThN0Yj7zsY5UWZezbzqrdiTSLl9eMKvM4w&s",
      date: "3 March 2024",
      category: "Fashion",
      readTime: "6 min read",
      link: "https://www.gq.com/story/smart-casual-dress-code-guide"
    },
    {
      id: 8,
      title: "Denim Guide: Finding the Perfect Jeans",
      excerpt: "Everything you need to know about choosing, fitting, and styling men's jeans.",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=300&fit=crop",
      date: "28 February 2024",
      category: "Fashion",
      readTime: "4 min read",
      link: "https://www.esquire.com/style/mens-fashion/a27134/jeans-guide/"
    },
    {
      id: 9,
      title: "Sustainable Fashion: Eco-Friendly Men's Style",
      excerpt: "Discover sustainable fashion choices that are good for you and the planet.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop",
      date: "25 February 2024",
      category: "Sustainability",
      readTime: "8 min read",
      link: "https://www.gq.com/story/sustainable-mens-fashion"
    },
    {
      id: 12,
      title: "Online vs In-Store: Where to Shop for Men's Fashion",
      excerpt: "Compare the benefits of online and in-store shopping for men's clothing and accessories.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      date: "18 February 2024",
      category: "Lifestyle",
      readTime: "5 min read",
      link: "https://www.gq.com/story/online-vs-in-store-shopping"
    },
    {
      id: 15,
      title: "Men's Fashion for Different Body Types",
      excerpt: "Dress to flatter your body type with our comprehensive style guide.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXx1jZXyx2uzAjAMXJfQGfviad9eLuLeN_g&s",
      date: "10 February 2024",
      category: "Fashion",
      readTime: "9 min read",
      link: "https://www.esquire.com/style/mens-fashion/a27134/body-type-guide/"
    },
    {
      id: 16,
      title: "Fragrance Guide: Choosing the Right Cologne",
      excerpt: "Navigate the world of men's fragrances and find your signature scent.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=300&fit=crop",
      date: "8 February 2024",
      category: "Grooming",
      readTime: "7 min read",
      link: "https://www.menshealth.com/style/a19516767/cologne-guide/"
    },
    {
      id: 17,
      title: "Fashion Psychology: How Clothes Affect Confidence",
      excerpt: "Understand the psychological impact of clothing choices on confidence and performance.",
      image: "https://cdn.shopify.com/s/files/1/0560/9426/1456/files/The_Psychology_of_Dressing_3.jpg?v=1745333355",
      date: "5 February 2024",
      category: "Lifestyle",
      readTime: "6 min read",
      link: "https://www.gq.com/story/fashion-psychology"
    },
    {
      id: 18,
      title: "Men's Style Icons: Learning from the Best",
      excerpt: "Study the style of legendary men's fashion icons and adapt their looks for modern times.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
      date: "3 February 2024",
      category: "Fashion",
      readTime: "8 min read",
      link: "https://www.esquire.com/style/mens-fashion/a27134/style-icons/"
    }
  ];

  const categories = ["All", "Fashion", "Grooming", "Accessories", "Lifestyle", "Sustainability"];

  // Filter blog posts based on active category
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