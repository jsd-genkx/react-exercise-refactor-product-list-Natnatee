import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/TestProductForm';

function App() {
  const [products, setProducts] = useState([]);

  return (
    <div className="p-4">
      <ProductForm setProducts={setProducts} products={products} /> 
      <ProductList products={products} />
    </div>
  );
}

export default App;
