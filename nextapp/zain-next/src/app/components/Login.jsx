"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [mode, setMode] = useState('login');
  const [message, setMessage] = useState(null);
  const auth = useAuth();
  const router = useRouter();

  const submit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setMessage('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setMessage('Password must be at least 6 characters long.');
      return;
    }
    if (mode === 'register' && name.trim().length === 0) {
      setMessage('Please enter your name.');
      return;
    }

    (async () => {
      if (mode === 'login') {
        const res = await auth.login(email.trim(), password);
        if (res.success) {
          router.push('/dashboard');
        } else if (res.reason === 'no-account') {
          setMessage(res.message || 'Account not found. You can create a new account.');
        } else if (res.reason === 'invalid-credentials') {
          setMessage(res.message || 'Invalid credentials.');
        } else {
          setMessage(res.message || 'Login failed.');
        }
      } else {
        const res = await auth.register(name.trim(), email.trim(), password);
        if (res.success) {
          router.push('/login');
          setMessage('Registration successful. Please log in.');
        } else if (res.reason === 'already-exists') {
          setMessage(res.message || 'Account already exists. Please log in.');
        } else {
          setMessage(res.message || 'Registration failed.');
        }
      }
    })();
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <img className="login-logo" src="https://i.postimg.cc/TP6JjSTt/logo.webp" alt="Elite Men's Fashion Logo" />
        <h2>{mode === 'login' ? 'Login' : 'Create New Account'}</h2>

        {message && <div className="login-message">{message}</div>}

        <form onSubmit={submit} className="login-form">
          {mode === 'register' && (
            <label>
              Name
              <input value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
          )}

          <label>
            Email
            <input value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>

          <label>
            Password
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>

          <div className="login-actions">
            <button type="submit" className="btn btn-primary">
              {mode === 'login' ? 'Login' : 'Create Account'}
            </button>
          </div>
        </form>

        <div className="login-footer">
          {mode === 'login' ? (
            <>
              <p>
                Don't have an account?{' '}
                <button className="link-button" onClick={() => { setMode('register'); setMessage(null); }}>
                  Create New
                </button>
              </p>
            </>
          ) : (
            <p>
              Already have an account?{' '}
              <button className="link-button" onClick={() => { setMode('login'); setMessage(null); }}>
                Login
              </button>
            </p>
          )}

        </div>
      </div>
    </div>
  );
}

export default Login;
