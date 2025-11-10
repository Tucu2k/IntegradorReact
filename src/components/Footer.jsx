import React from 'react'
import './Footer.css';

export default function Footer(){
  return (
    <footer className="footer-custom py-4 mt-5">
      <div className="container text-center">
        <small>© {new Date().getFullYear()} Mi Ecommerce - Hecho con React + Vite + Bootstrap</small>
      </div>
    </footer>
  )
}
