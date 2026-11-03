import React from 'react'
import NavBar from './component/NavBar'
import Hero from './component/Hero'
import Products from './component/Products'
import Services from './component/Services'
import ShopLocation from './component/Location'
import Footer from './component/Footer'

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Products />
      <Services />
      <ShopLocation />
      <Footer />
    </div>
  )
}

export default App