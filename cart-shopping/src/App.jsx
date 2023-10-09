import { useState } from 'react'
import { Products } from './components/Products/Products'
import { products as initialProducts} from './mocks/products.json'
import {Header}  from './components/Header/Header'
import { useFilters } from './hooks/useFilters'
import { Footer } from './components/Footer/Footer'
import { Cart } from './components/Cart/Cart'
import { CartProvider } from './context/cart'
import { IS_DEVELOPMENT } from './config'
import { FiltersContext } from './context/filters'
import './App.css'

// import { Footer } from './components/Footer.jsx'
// import { IS_DEVELOPMENT } from './config.js'
// import { useFilters } from './hooks/useFilters.js'
// import { Cart } from './components/Cart.jsx'
// import { CartProvider } from './context/cart.jsx'

function App () {
  const { filterProducts } = useFilters();


  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
    <Header />
    <Cart />
    <Products products={filteredProducts} />
    {IS_DEVELOPMENT && <Footer />}
  </CartProvider>
  )
}

export default App