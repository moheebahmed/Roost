import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Quality', href: '/quality' },
     { label: 'Menu', href: '/menu' },
    { label: 'Story', href: '#' },
    { label: 'Locations', href: '#' },
]

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    const isActive = (href) => {
        if (href === '/') return location.pathname === '/'
        return location.pathname.startsWith(href)
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-[1240px] mx-auto px-5 md:px-10 flex items-center justify-between h-16 md:h-20">

                {/* Logo */}
                <Link to="/">
                    <img src={logo} className="h-7 md:h-8 w-auto" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            to={link.href}
                            className={`font-['Hanken_Grotesk'] text-[16px] font-bold transition-colors ${isActive(link.href)
                                ? 'text-[#BD001A] border-b-2 border-[#BD001A] pb-1'
                                : 'text-[#5D5F5F] hover:text-[#BD001A]'}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <a href="#" className="hidden md:block font-montserrat text-sm font-bold bg-[#E61E2A] text-white px-6 py-2.5 hover:bg-red-700 transition-colors tracking-wide">
                    ORDER NOW
                </a>

                {/* Mobile Hamburger */}
                <button className="md:hidden text-gray-800" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 px-5 py-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            to={link.href}
                            onClick={() => setMenuOpen(false)}
                            className={`font-['Hanken_Grotesk'] text-[16px] font-bold transition-colors ${isActive(link.href) ? 'text-[#BD001A]' : 'text-[#5D5F5F]'}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a href="#" className="font-montserrat text-sm font-bold bg-[#E61E2A] text-white px-6 py-3 text-center hover:bg-red-700 transition-colors tracking-wide">
                        ORDER NOW
                    </a>
                </div>
            )}
        </header>
    )
}

export default Header
