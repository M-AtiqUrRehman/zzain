"use client"
import React from 'react';
import AuthProviderClient from './AuthProviderClient';
import Header from '../../src/components/Header';
import Nav from '../../src/components/Nav';
import Footer from '../../src/components/Footer';

export default function AppShell({ children }) {
  return (
    <AuthProviderClient>
      <div className="app-root">
        <Header />
        <Nav />
        <main className="main-content">{children}</main>
        <Footer />
      </div>
    </AuthProviderClient>
  );
}
