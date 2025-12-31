"use client"
import React from 'react';
import { AuthProvider } from '../../src/AuthContext';

export default function AuthProviderClient({ children }) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}
