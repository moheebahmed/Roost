import { Routes, Route, Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Quality from './pages/Quality'
import Menu from './pages/Menu'
import Locations from './pages/Locations'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import OrderConfirmation from './pages/OrderConfirmation'
import OrderTracking from './pages/OrderTracking'
import ThankYou from './pages/ThankYou'

function Layout() {
  return (
    <div className="pt-16 md:pt-20">
      {/* ─────Header─────── */}
      <Header />

      <Outlet />
      {/* ─────Footer─────── */}
      <Footer />
    </div>
  )
} 

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/order-tracking" element={<OrderTracking />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Route>
    </Routes>
  )
}

export default App
