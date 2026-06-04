import { useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import StarRating from '../components/StarRating'
import logo from '../assets/images/logo.png'
import { FiStar, FiHome, FiShoppingBag, FiHeart } from 'react-icons/fi'

const WHATS_NEXT = [
  { icon: FiStar, title: 'Join Roost Rewards', desc: 'Earn points on every order and unlock free meals.' },
  { icon: FiShoppingBag, title: 'Explore More Menu Items', desc: 'New seasonal items added every week.' },
  { icon: FiHeart, title: 'Share the Love', desc: 'Tell your friends about Roost and get a referral bonus.' },
]

export default function ThankYou() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const order = state?.order
  const redirected = useRef(false)

  useEffect(() => {
    if (!order && !redirected.current) { redirected.current = true; navigate('/menu', { replace: true }) }
  }, [order, navigate])

  if (!order) return null

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <div className="max-w-[600px] mx-auto px-5 md:px-8 py-12 md:py-16">

        {/* Hero */}
        <div className="bg-[#1A1C1C] text-center px-8 py-12 mb-5 relative overflow-hidden">
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#BD001A] opacity-10 rounded-full" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#BD001A] opacity-10 rounded-full" />
          <img src={logo} className="h-7 mx-auto mb-8 relative z-10 opacity-70" />
          <div className="relative z-10 w-16 h-16 bg-[#BD001A] rounded-full flex items-center justify-center mx-auto mb-5">
            <FiHeart size={26} className="text-white" fill="white" />
          </div>
          <h1 className="relative z-10 font-['Montserrat'] font-black text-[32px] md:text-[40px] uppercase leading-tight text-white mb-3">
            THANK YOU,<br /><span className="text-[#BD001A]">{order.customer?.firstName}!</span>
          </h1>
          <p className="relative z-10 font-['Hanken_Grotesk'] text-[14px] text-[#9A9C9C] max-w-xs mx-auto leading-relaxed">
            It was a pleasure serving you. We hope every bite was worth it.
          </p>
          <div className="relative z-10 w-12 h-[2px] bg-[#BD001A] mx-auto my-6" />
          <p className="relative z-10 font-['Hanken_Grotesk'] text-[12px] tracking-widest uppercase text-[#6C6E6E]">
            Order <span className="text-white font-bold">#{order.id}</span>
            {' · '}Total <span className="text-[#BD001A] font-bold">${order.total}</span>
          </p>
        </div>

        {/* Rating */}
        <div className="bg-white border border-[#E8E8E8] px-6 py-7 mb-5 text-center">
          <p className="font-['Montserrat'] font-black text-[13px] tracking-widest uppercase text-[#1A1C1C] mb-1">How was your experience?</p>
          <p className="font-['Hanken_Grotesk'] text-[13px] text-[#9A9C9C] mb-5">Tap a star to rate your order</p>
          <StarRating />
        </div>

        {/* What's next */}
        <div className="bg-white border border-[#E8E8E8] mb-7 overflow-hidden">
          <div className="bg-[#1A1C1C] px-5 py-3">
            <h2 className="font-['Montserrat'] font-black text-[12px] tracking-widest uppercase text-white">WHAT'S NEXT?</h2>
          </div>
          <div className="divide-y divide-[#F5F5F5]">
            {WHATS_NEXT.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-center gap-4 px-5 py-4">
                <div className="w-8 h-8 bg-[#FFF0F0] flex items-center justify-center shrink-0">
                  <Icon size={14} className="text-[#BD001A]" />
                </div>
                <div>
                  <p className="font-['Hanken_Grotesk'] font-bold text-[13px] text-[#1A1C1C]">{title}</p>
                  <p className="font-['Hanken_Grotesk'] text-[12px] text-[#9A9C9C]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link to="/" className="flex-1 bg-[#1A1C1C] text-white font-['Hanken_Grotesk'] font-bold text-[12px] tracking-widest uppercase py-4 text-center hover:bg-[#BD001A] transition-colors flex items-center justify-center gap-2">
            <FiHome size={13} /> BACK TO HOME
          </Link>
          <Link to="/menu" className="flex-1 bg-[#BD001A] text-white font-['Hanken_Grotesk'] font-bold text-[12px] tracking-widest uppercase py-4 text-center hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
            <FiShoppingBag size={13} /> ORDER AGAIN
          </Link>
        </div>
      </div>
    </div>
  )
}
