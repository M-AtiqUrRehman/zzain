"use client"
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../src/AuthContext';

export default function ProtectedClient({ children }) {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!auth || !auth.currentUser) {
      router.replace('/login');
    }
  }, [auth, router]);

  if (!auth || !auth.currentUser) return null;
  return children;
}
