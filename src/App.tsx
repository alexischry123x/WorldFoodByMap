import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import Basket from './components/Basket';
import Index from './pages/Index';
import VillageDetail from './components/VillageDetail';
import ProductPurchase from './components/ProductPurchase';
import BasketPage from './pages/BasketPage';

const App: React.FC = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Basket />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/village/:villageId" element={<VillageDetail />} />
          <Route path="/purchase/:villageId" element={<ProductPurchase />} />
          <Route path="/basket" element={<BasketPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
