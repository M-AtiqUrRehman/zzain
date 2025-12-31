import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'
import Collection from './components/Collection'
import Items from './components/Items'
import Blog from './components/Blog'
import Contact from './components/Contact'
import AboutUs from './components/Aboutus'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import { AuthProvider } from './AuthContext'
import AddProduct from './components/AddProduct'
import Sales from './components/Sales'
import Services from './components/Services'
import './App.css'

import { useAuth } from './AuthContext'

function ProtectedRoute({ children }) {
  const auth = useAuth();
  if (!auth || !auth.currentUser) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <Nav />

          <main className="main-content">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/add-product" element={<ProtectedRoute><AddProduct /></ProtectedRoute>} />
              <Route path="/services" element={<ProtectedRoute><Services /></ProtectedRoute>} />
              <Route path="/sales" element={<ProtectedRoute><Sales /></ProtectedRoute>} />
              <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/collection" element={<ProtectedRoute><Collection /></ProtectedRoute>} />
              <Route path="/products" element={<ProtectedRoute><Items /></ProtectedRoute>} />
              <Route path="/blog" element={<ProtectedRoute><Blog /></ProtectedRoute>} />
              <Route path="/about" element={<ProtectedRoute><AboutUs /></ProtectedRoute>} />
              <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
