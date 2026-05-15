import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Collections from './pages/Collections'
import ProductDetail from './pages/ProductDetail'
import CustomJewelry from './pages/CustomJewelry'
import About from './pages/About'
import Contact from './pages/Contact'

import MobileBottomNav from './components/MobileBottomNav'
import MobileTopBar from './components/MobileTopBar'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>

      <ScrollToTop />

      {/* MOBILE TOP BAR */}
      <MobileTopBar />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* COLLECTIONS */}
        <Route
          path="/collections"
          element={<Collections />}
        />

        <Route
  path="/collections/:category"
  element={<Collections />}
/>

        {/* PRODUCT DETAIL */}
        <Route
          path="/collections/:category/:slug"
          element={<ProductDetail />}
        />

        <Route
  path="/about"
  element={<About />}
/>

<Route
  path="/contact"
  element={<Contact />}
/>

        {/* CUSTOM JEWELRY */}
        <Route
          path="/custom-jewelry"
          element={<CustomJewelry />}
        />

      </Routes>

      {/* MOBILE NAV */}
      <MobileBottomNav />

    </>
  )
}

export default App