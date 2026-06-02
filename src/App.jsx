import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Quality from './pages/Quality'
import Menu from './pages/Menu'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import OrderConfirmation from './pages/OrderConfirmation'
import OrderTracking from './pages/OrderTracking'
import ThankYou from './pages/ThankYou'
import Locations from './pages/Locations'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quality" element={<Quality />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-confirmation" element={<OrderConfirmation />} />
      <Route path="/order-tracking" element={<OrderTracking />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  )
}

export default App
