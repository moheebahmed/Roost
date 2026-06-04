import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { FiMenu, FiX, FiShoppingBag } from 'react-icons/fi'
import { useCart } from '../context/CartContext'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Quality', href: '/quality' },
  { label: 'Menu', href: '/menu' },
  { label: 'Story', href: '#' },
  { label: 'Locations', href: '/locations' },
]

function CartIcon({ count }) {
  return (
    <Link to="/cart" className="relative text-[#1A1C1C] hover:text-[#BD001A] transition-colors">
      <FiShoppingBag size={22} />
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-[#E61E2A] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
          {count}
        </span>
      )}
    </Link>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { totalItems } = useCart()

  const isActive = (href) => href === '/' ? location.pathname === '/' : location.pathname.startsWith(href)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10 flex items-center justify-between h-16 md:h-20">

        <Link to="/"><img src={logo} className="h-7 md:h-8 w-auto" /></Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map(({ label, href }) => (
            <Link key={label} to={href}
              className={`font-['Hanken_Grotesk'] text-[16px] font-bold transition-colors ${isActive(href)
                  ? 'text-[#BD001A] border-b-2 border-[#BD001A] pb-1'
                  : 'text-[#5D5F5F] hover:text-[#BD001A]'
                }`}>
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <CartIcon count={totalItems} />
          <Link to="/menu" className="font-montserrat text-sm font-bold bg-[#E61E2A] text-white px-6 py-2.5 hover:bg-red-700 transition-colors tracking-wide">
            ORDER NOW
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-4">
          <CartIcon count={totalItems} />
          <button className="text-gray-800" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-5 py-4 flex flex-col gap-4">
          {navLinks.map(({ label, href }) => (
            <Link key={label} to={href} onClick={() => setMenuOpen(false)}
              className={`font-['Hanken_Grotesk'] text-[16px] font-bold transition-colors ${isActive(href) ? 'text-[#BD001A]' : 'text-[#5D5F5F]'}`}>
              {label}
            </Link>
          ))}
          <Link to="/menu" onClick={() => setMenuOpen(false)}
            className="font-montserrat text-sm font-bold bg-[#E61E2A] text-white px-6 py-3 text-center hover:bg-red-700 transition-colors tracking-wide">
            ORDER NOW
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header
