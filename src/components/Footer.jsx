import logo from '../assets/images/foot-logo.png'
import { FiInstagram, FiTwitter, FiFacebook, FiYoutube, FiMapPin, FiPhone, FiMail } from 'react-icons/fi'

const navLinks = [
  { label: 'Menu', href: '#' },
  { label: 'Quality', href: '#' },
  { label: 'Story', href: '#' },
  { label: 'Locations', href: '#' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Use', href: '#' },
  { label: 'Accessibility', href: '#' },
]

const socials = [
  { icon: <FiInstagram size={18} />, href: '#', label: 'Instagram' },
  { icon: <FiTwitter size={18} />, href: '#', label: 'Twitter' },
  { icon: <FiFacebook size={18} />, href: '#', label: 'Facebook' },
  { icon: <FiYoutube size={18} />, href: '#', label: 'YouTube' },
]

const contactItems = [
  { icon: <FiMail size={15} />, text: 'hello@roostandco.com' },
  { icon: <FiPhone size={15} />, text: '1-800-ROOST-CO' },
  { icon: <FiMapPin size={15} />, text: 'Mon – Sun: 10am – 10pm' },
]

function Footer() {
  return (
    <footer className="bg-[#2F3131]">

      {/* Top Section */}
      <div className="max-w-[1240px] mx-auto px-5 md:px-10 pt-12 md:pt-16 pb-10 md:pb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">

        {/* Col 1 — Logo + About */}
        <div className="flex flex-col gap-5 sm:col-span-2 md:col-span-1">
          <a href="#">
            <img src={logo} className="h-10 md:h-12 w-auto object-contain" />
          </a>
          <p className="font-['Hanken_Grotesk'] text-[14px] leading-[1.8] text-gray-300">
            Hand-breaded. Farm-fresh. Zero compromises. This is chicken done right.
          </p>
          <div className="flex items-center gap-3 mt-1">
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label}
                className="w-9 h-9 flex items-center justify-center border border-gray-600 text-gray-300 hover:border-red-600 hover:text-red-600 transition-colors">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Quick Links */}
        <div>
          <h4 className="font-['Montserrat'] font-bold text-[11px] tracking-[2px] uppercase text-white mb-5 pb-3 border-b border-gray-700">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="font-['Hanken_Grotesk'] text-[14px] text-gray-300 hover:text-red-600 transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-3 h-[1px] bg-red-600 transition-all duration-300" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Contact */}
        <div>
          <h4 className="font-['Montserrat'] font-bold text-[11px] tracking-[2px] uppercase text-white mb-5 pb-3 border-b border-gray-700">
            Contact Us
          </h4>
          <ul className="flex flex-col gap-4">
            {contactItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-red-600 mt-0.5 shrink-0">{item.icon}</span>
                <span className="font-['Hanken_Grotesk'] text-[14px] text-gray-300">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — CTA */}
        <div className="flex flex-col gap-4">
          <h4 className="font-['Montserrat'] font-bold text-[11px] tracking-[2px] uppercase text-white mb-2 pb-3 border-b border-gray-700">
            Order Now
          </h4>
          <a href="#" className="font-['Montserrat'] font-bold text-[12px] tracking-widest uppercase bg-[#E61E2A] text-white px-6 py-4 hover:bg-red-700 transition-colors text-center">
            Order for pickup
          </a>
          <a href="#" className="font-['Montserrat'] font-bold text-[12px] tracking-widest uppercase border border-gray-600 text-gray-300 px-6 py-4 hover:border-red-600 hover:text-red-600 transition-colors text-center">
            find a roost
          </a>
          <a href="#" className="font-['Montserrat'] font-bold text-[12px] tracking-widest uppercase border border-gray-600 text-gray-300 px-6 py-4 hover:border-red-600 hover:text-red-600 transition-colors text-center">
            delivery options
          </a>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700" />

      {/* Bottom Bar */}
      <div className="max-w-[1240px] mx-auto px-5 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-['Hanken_Grotesk'] text-[13px] text-gray-600 text-center sm:text-left">
          © {new Date().getFullYear()} Roost & Co. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {legalLinks.map((link) => (
            <a key={link.label} href={link.href} className="font-['Hanken_Grotesk'] text-[13px] text-gray-600 hover:text-gray-300 transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      </div>

    </footer>
  )
}

export default Footer
