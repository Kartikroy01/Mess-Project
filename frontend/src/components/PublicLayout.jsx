// src/components/PublicLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PublicLayout() {
  return (
    <>
      <Navbar />
      <main>
        {/* This <Outlet /> renders the page (Home, Login, etc.) */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}