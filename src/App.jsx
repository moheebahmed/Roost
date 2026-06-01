import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Quality from './pages/Quality'
import Menu from './pages/Menu'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quality" element={<Quality />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  )
}

export default App
