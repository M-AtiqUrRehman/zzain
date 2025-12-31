"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import * as api from './apiClient';

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:5000';

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('currentUser')) || null;
    } catch (e) {
      return null;
    }
  });

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('currentUser');
    }
  }, [currentUser]);

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('token');
      if (token && !currentUser) {
        try {
          const res = await api.getCurrentUser(token);
          if (res.ok) {
            setCurrentUser(res.user || (res.data && res.data.user) || null);
          } else {
            localStorage.removeItem('token');
            setCurrentUser(null);
          }
        } catch (err) {
          localStorage.removeItem('token');
          setCurrentUser(null);
        }
      }
    })();
  }, []);

  const login = async (email, password) => {
    try {
      const res = await api.login(email, password);
      if (!res.ok) {
        if (res.message && res.message.includes('Invalid')) return { success: false, reason: 'invalid-credentials', message: res.message };
        return { success: false, reason: 'no-account', message: res.message || 'Login failed' };
      }
      if (res.token) {
        localStorage.setItem('token', res.token);
      }
      setCurrentUser(res.user || res.data?.user);
      return { success: true };
    } catch (error) {
      return { success: false, reason: 'network', message: error.message };
    }
  };

  const register = async (name, email, password) => {
    try {
      const res = await api.register(name, email, password);
      if (!res.ok) {
        return { success: false, reason: 'already-exists', message: res.message || 'Registration failed' };
      }
      return { success: true };
    } catch (error) {
      return { success: false, reason: 'network', message: error.message };
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('token');
  };

  const value = { currentUser, login, register, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
