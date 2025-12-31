"use client"
import React from 'react';
import { useAuth } from '../AuthContext';
import Link from 'next/link';

function Dashboard() {
  const auth = useAuth();

  return (
    <div className="dashboard-page">
      <div className="dashboard-card">
        <h1>Welcome{auth && auth.currentUser ? `, ${auth.currentUser.name || auth.currentUser.email}` : ''}!</h1>
        <p>This is your dashboard. Use the actions below to manage your store.</p>

        <div className="grid grid-3 mt-3 dashboard-actions">
          <div className="card card-body dashboard-action">
            <h3 className="card-title">View Products</h3>
            <p className="card-text">Browse all products available in the store.</p>
            <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=abc" alt="products" className="action-img" />
            <Link href="/products" className="btn btn-primary">View All Products</Link>
          </div>

          <div className="card card-body dashboard-action">
            <h3 className="card-title">Today's Sales</h3>
            <p className="card-text">See sales data for today (placeholder).</p>
            <img src="https://images.unsplash.com/photo-1556742400-b5baae7121b5?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=def" alt="sales" className="action-img" />
            <Link href="/sales" className="btn btn-secondary">View Sales</Link>
          </div>

          <div className="card card-body dashboard-action">
            <h3 className="card-title">Add New Product</h3>
            <p className="card-text">Add a new product to your store (demo).</p>
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=ghi" alt="add product" className="action-img" />
            <Link href="/add-product" className="btn btn-primary">Add New</Link>
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <button className="btn btn-outline" onClick={() => auth.logout()}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
