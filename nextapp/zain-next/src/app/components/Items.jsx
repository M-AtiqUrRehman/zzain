"use client"
import React, { useEffect, useState } from "react";

import * as api from '../apiClient';

function Items() {
  const [serverProducts, setServerProducts] = useState([]);
  const [loadingServerProducts, setLoadingServerProducts] = useState(true);
  const products = [
    {
      id: 1,
      name: "PS England Shoes",
      price: 37.24,
      image: "https://i.postimg.cc/8CmBZH5N/shoes.webp",
      rating: 3,
      colors: ['red', 'blue', 'white']
    },
    {
      id: 2,
      name: "PS England Jacket",
      price: 17.24,
      image: "https://i.postimg.cc/76X9ZV8m/Screenshot_from_2022-06-03_18-45-12.png",
      rating: 2,
      colors: ['green', 'grey', 'brown']
    },
    {
      id: 3,
      name: "PS England Shirt",
      price: 27.24,
      image: "https://i.postimg.cc/j2FhzSjf/bs2.png",
      rating: 4,
      colors: ['brown', 'green', 'blue']
    },
    {
      id: 4,
      name: "PS England Shoes",
      price: 43.67,
      image: "https://i.postimg.cc/QtjSDzPF/bs3.png",
      rating: 4,
      colors: ['red', 'grey', 'blue']
    }
  ];

  const newArrivals = [
    {
      id: 5,
      name: "PS England T-Shirt",
      price: 10.23,
      image: "https://i.postimg.cc/fbnB2yfj/na1.png",
      rating: 5,
      colors: ['blank', 'blue', 'brown']
    },
    {
      id: 6,
      name: "PS England Bag",
      price: 9.28,
      image: "https://i.postimg.cc/zD02zJq8/na2.png",
      rating: 1,
      colors: ['brown', 'red', 'green']
    },
    {
      id: 7,
      name: "PS England Sunglass",
      price: 6.24,
      image: "https://i.postimg.cc/Dfj5VBcz/sunglasses1.jpg",
      rating: 4,
      colors: ['grey', 'blank', 'blank']
    },
    {
      id: 8,
      name: "PS England Shoes",
      price: 43.67,
      image: "https://i.postimg.cc/FszW12Kc/na4.png",
      rating: 4,
      colors: ['grey', 'red', 'blue']
    }
  ];

  const hotSales = [
    {
      id: 9,
      name: "PS England Shoes",
      price: 37.24,
      image: "https://i.postimg.cc/jS7pSQLf/na4.png",
      rating: 4,
      colors: ['grey', 'black', 'blue']
    },
    {
      id: 10,
      name: "PS England T-Shirt",
      price: 10.23,
      image: "https://i.postimg.cc/fbnB2yfj/na1.png",
      rating: 5,
      colors: ['blank', 'blue', 'brown']
    },
    {
      id: 11,
      name: "PS England T-Shirt",
      price: 15.24,
      image: "https://i.postimg.cc/RhVP7YQk/hs1.png",
      rating: 4,
      colors: ['blank', 'red', 'blue']
    },
    {
      id: 12,
      name: "PS England Bag",
      price: 9.28,
      image: "https://i.postimg.cc/zD02zJq8/na2.png",
      rating: 1,
      colors: ['blank', 'grey', 'brown']
    }
  ];

    useEffect(() => {
      (async () => {
        setLoadingServerProducts(true);
        try {
          const res = await api.getProducts();
          if (res.ok && res.products && res.products.length) {
            setServerProducts(res.products.map(p => ({ id: p._id, name: p.title, price: p.price, image: p.image, rating: 4, colors: ['grey'] })));
          } else {
            setServerProducts([]);
          }
        } catch (err) {
          setServerProducts([]);
        }
        setLoadingServerProducts(false);
      })();
    }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i 
        key={index} 
        className={index < rating ? 'bx bxs-star' : 'bx bx-star'}
      ></i>
    ));
  };

  const renderColors = (colors) => {
    return colors.map((color, index) => (
      <i 
        key={index} 
        className={`bx bxs-circle ${color}`}
        title={color}
      ></i>
    ));
  };

  const ProductCard = ({ product }) => (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className="product-overlay">
          <button className="btn btn-primary">Quick View</button>
                </div>
              </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">
          {renderStars(product.rating)}
              </div>
        <div className="product-price">
          <span className="price">${product.price}</span>
          <div className="product-colors">
            {renderColors(product.colors)}
            </div>
          </div>
        <button className="btn btn-primary product-btn">
          Add to Cart
        </button>
                </div>
              </div>
  );

  return (
    <section id="products" className="products-section">
      <div className="container">
        {/* Top Sales */}
        <div className="products-section-header">
          <h2 className="section-title">Top Sales</h2>
          <p className="section-subtitle">Our best-selling products</p>
        </div>
        <div className="products-grid">
          {loadingServerProducts ? (
            <div className="loading">Loading products...</div>
          ) : (
            (serverProducts.length > 0 ? serverProducts : products).map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
      </div>

      {/* New Arrivals */}
        <div className="products-section-header">
          <h2 className="section-title">New Arrivals</h2>
          <p className="section-subtitle">Fresh styles just arrived</p>
              </div>
        <div className="products-grid">
          {newArrivals.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>

      {/* Hot Sales */}
        <div className="products-section-header">
          <h2 className="section-title">Hot Sales</h2>
          <p className="section-subtitle">Limited time offers</p>
              </div>
        <div className="products-grid">
          {hotSales.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Items;
