import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard.jsx"
import CartList from './CartList'
import Search from './Search';

export default function ProductList() {
  // LOADERS //
  const { allProducts, cartItems } = useLoaderData() || {}

  // STATES //

  const [filteredProducts, setFilteredProducts] = useState("")
  const [cart, setCart] = useState(cartItems)

  const searchProducts = allProducts?.filter(product => { 
    return product.name.toLowerCase().includes(filteredProducts.toLowerCase())})
  
  const mapProductCards = searchProducts?.map(productObj => (
    <ProductCard 
      key={productObj.id} 
      productObj={productObj}
      addCartItems={addCartItems}
      cart={cart}
      setCart={setCart}
    />
  ))

  function addCartItems(newCartItem) {
    setCart(prevCartItems => [...prevCartItems, newCartItem])
  }

  return (
    <>
      <div className="product-page">
        <div className="search">
          <Search setFilteredProducts={setFilteredProducts} />
        </div>
        <div className="content">
          <div className="product-list">
            <div className="products-container">
              {mapProductCards}
            </div>
          </div>
          <div className="cart-list">
            <CartList cart={cart} setCart={setCart}/>
          </div>
        </div>
      </div>
    </>
  );
}
