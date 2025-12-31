"use client"
import React, { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext';

function Sales() {
  const auth = useAuth();
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // For now, show demo data. In future, fetch from /api/sales with auth token.
    const demo = [
      { id: 1, product: 'Minimal Shirt', price: 49.99, qty: 3, time: '09:25' },
      { id: 2, product: 'Classic Jeans', price: 69.99, qty: 2, time: '10:15' },
      { id: 3, product: 'Leather Jacket', price: 139.99, qty: 1, time: '12:20' },
    ];
    setTimeout(() => {
      setSales(demo);
      setLoading(false);
    }, 600);
  }, []);

  return (
    <section className="sales-page container">
      <div className="sales-card">
        <h2>Today's Sales</h2>
        <p className="lead">Summary of sale activity for today.</p>
        {loading ? (
          <div className="loading"><div className="spinner"></div></div>
        ) : (
          <div className="sales-list">
            {sales.map(s => (
              <div key={s.id} className="sale-item card">
                <div className="card-body">
                  <h4 className="card-title">{s.product}</h4>
                  <p className="card-text">Qty: {s.qty} | Price: ${s.price}</p>
                  <small className="text-muted">Time: {s.time}</small>
                </div>
              </div>
            ))}
            {sales.length === 0 && (
              <div>No sales recorded for today.</div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Sales;
