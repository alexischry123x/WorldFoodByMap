import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import { CartProvider } from './components/CartContext';

import './index.css';

// Remove dark mode class addition

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
