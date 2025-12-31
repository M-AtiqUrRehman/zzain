"use client"
import React, { useState, useEffect, useRef } from "react";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { useAuth } from '../AuthContext';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navLoading, setNavLoading] = useState(true);
  const location = usePathname();
  const didInitRef = useRef(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location === path;
  };

  const auth = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    auth.logout();
    router.push('/');
  };

  useEffect(() => {
    if (!didInitRef.current && location === '/') {
      didInitRef.current = true;
      setNavLoading(true);
      const t = setTimeout(() => {
        setNavLoading(false);
        if (auth && auth.currentUser) router.push('/dashboard');
        else router.push('/login');
      }, 800);
      return () => clearTimeout(t);
    } else {
      setNavLoading(false);
    }
  }, [auth, location, router]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <input 
          type="checkbox" 
          id="checkbox" 
          checked={isMenuOpen}
          onChange={toggleMenu}
        />
        
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>

        <ul className={`menu-items ${isMenuOpen ? 'active' : ''}`}>
          {auth && auth.currentUser ? (
            <>
              <li>
                <Link 
                  href="/" 
                  className={isActive('/') ? 'active' : ''}
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className={isActive('/services') ? 'active' : ''}
                  onClick={closeMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className={isActive('/about') ? 'active' : ''}
                  onClick={closeMenu}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className={isActive('/contact') ? 'active' : ''}
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-user-section">
                <button className="nav-plain-link" onClick={() => { closeMenu(); handleLogout(); }}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link href="/login" onClick={closeMenu} className={isActive('/login') ? 'active' : ''}>
                Login / Create
              </Link>
            </li>
          )}
        </ul>

        <div className="logo">
          <Link href="/">
            {navLoading ? (
              <div className="nav-spinner" aria-hidden="true" />
            ) : (
              <img src="https://i.postimg.cc/TP6JjSTt/logo.webp" alt="Elite Men's Fashion Logo" />
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
