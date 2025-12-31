"use client"
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../AuthContext';

function LoadingSplash() {
  const router = useRouter();
  const auth = useAuth();

  useEffect(() => {
    const t = setTimeout(() => {
      if (auth && auth.currentUser) router.push('/dashboard');
      else router.push('/login');
    }, 800); // 800ms delay
    return () => clearTimeout(t);
  }, [auth, router]);

  return (
    <div className="splash-page">
      <div className="splash-card">
        <img className="splash-logo" src="https://i.postimg.cc/TP6JjSTt/logo.webp" alt="Logo" />
        <h3 className="splash-title">Elite Men's Fashion</h3>
        <div className="splash-loader" aria-hidden></div>
      </div>
    </div>
  );
}

export default LoadingSplash;
