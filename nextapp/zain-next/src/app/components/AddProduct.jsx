"use client"
import React, { useState } from 'react';

import { useRouter } from 'next/navigation';
import { useAuth } from '../AuthContext';
import api from '../apiClient';

function AddProduct() {
  const [product, setProduct] = useState({ title: '', price: '', image: '' });
  const [status, setStatus] = useState(null);
  const router = useRouter();
  const auth = useAuth();

  const handleChange = (e) => setProduct({ ...product, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('saving');
    try {
      const token = localStorage.getItem('token');
      const res = await api.addProduct({ title: product.title, price: Number(product.price), image: product.image }, token);
      if (!res.ok) {
        setStatus({ error: res.message || 'Failed to create product' });
        return;
      }
      setStatus('saved');
      setTimeout(() => router.push('/products'), 800);
    } catch (err) {
      setStatus({ error: err.message });
    }
  };

  return (
    <div className="addproduct-page">
      <div className="addproduct-card">
        <h2>Add New Product</h2>
        
        {status === 'saved' && <div className="success">Product saved (demo)</div>}

        <form onSubmit={handleSubmit} className="addproduct-form">
          <label>
            Title
            <input name="title" value={product.title} onChange={handleChange} required />
          </label>
          <label>
            Price
            <input name="price" value={product.price} onChange={handleChange} required />
          </label>
          <label>
            Image URL
            <input name="image" value={product.image} onChange={handleChange} placeholder="https://..." />
          </label>

          <div className="actions">
            <button className="btn btn-primary" type="submit">Save Product</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
