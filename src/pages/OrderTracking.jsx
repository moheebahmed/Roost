import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TrackingSteps from '../components/order/TrackingSteps'
import OrderItemsList from '../components/order/OrderItemsList'
import OrderCustomerInfo from '../components/order/OrderCustomerInfo'
import { FiCheck, FiClock, FiHome, FiShoppingBag, FiHeart } from 'react-icons/fi'

function OrderTracking() {
    const location = useLocation()
    const navigate = useNavigate()
    const order    = location.state?.order
    const hasRedirected = useRef(false)

    const [currentStep, setCurrentStep] = useState(0)
    const [eta, setEta] = useState(28)

    useEffect(() => {
        if (!order) return
        const timers = [
            setTimeout(() => setCurrentStep(1), 3000),
            setTimeout(() => setCurrentStep(2), 7000),
            setTimeout(() => setCurrentStep(3), 12000),
        ]
        return () => timers.forEach(clearTimeout)
    }, [order])

    useEffect(() => {
        if (currentStep === 3) return
        const interval = setInterval(() => setEta((p) => (p > 1 ? p - 1 : 0)), 60000)
        return () => clearInterval(interval)
    }, [currentStep])

    useEffect(() => {
        if (!order && !hasRedirected.current) {
            hasRedirected.current = true
            navigate('/menu', { replace: true })
        }
    }, [order, navigate])

    if (!order) return null

    const isDelivered = currentStep === 3

    return (
        <div className="pt-16 md:pt-20 min-h-screen bg-[#F2F2F2]">
            <Header />

            {/* Top Status Bar */}
            <div className={`transition-colors duration-700 ${isDelivered ? 'bg-[#1B5E20]' : 'bg-[#1A1C1C]'}`}>
                <div className="max-w-[1240px] mx-auto px-5 md:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div className={`w-2.5 h-2.5 rounded-full animate-pulse ${isDelivered ? 'bg-green-400' : 'bg-[#BD001A]'}`} />
                        <span className="font-['Hanken_Grotesk'] font-bold text-[12px] tracking-widest uppercase text-white">
                            {isDelivered ? 'ORDER DELIVERED' : 'ORDER IN PROGRESS'}
                        </span>
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="font-['Hanken_Grotesk'] text-[12px] text-[#6C6E6E]">
                            Order <span className="text-white font-bold">#{order.id}</span>
                        </span>
                        {!isDelivered && (
                            <div className="flex items-center gap-1.5">
                                <FiClock size={13} className="text-[#BD001A]" />
                                <span className="font-['Hanken_Grotesk'] font-bold text-[12px] text-white">~{eta} min</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="max-w-[760px] mx-auto px-5 md:px-8 py-10 md:py-14">

                {/* Tracker Card */}
                <div className="bg-white border border-[#E8E8E8] overflow-hidden mb-5">
                    <div className="px-6 py-5 border-b border-[#F0F0F0] flex items-center justify-between">
                        <div>
                            <h1 className="font-['Montserrat'] font-black text-[18px] md:text-[22px] uppercase text-[#1A1C1C]">
                                TRACK YOUR ORDER
                            </h1>
                            <p className="font-['Hanken_Grotesk'] text-[13px] text-[#9A9C9C] mt-0.5">
                                {isDelivered ? 'Your order has been delivered. Enjoy!' : `Estimated delivery: ${eta} minutes`}
                            </p>
                        </div>
                        {!isDelivered && (
                            <div className="hidden sm:flex flex-col items-center">
                                <span className="font-['Montserrat'] font-black text-[32px] text-[#BD001A] leading-none">{eta}</span>
                                <span className="font-['Hanken_Grotesk'] text-[10px] tracking-widest uppercase text-[#9A9C9C]">min</span>
                            </div>
                        )}
                    </div>
                    <div className="px-6 py-8">
                        <TrackingSteps currentStep={currentStep} />
                    </div>
                    {isDelivered && (
                        <div className="mx-6 mb-6 bg-[#F0FFF4] border border-[#A8D5B5] px-5 py-4 flex items-center gap-3">
                            <div className="w-8 h-8 bg-[#2E7D32] rounded-full flex items-center justify-center shrink-0">
                                <FiCheck size={14} className="text-white" strokeWidth={3} />
                            </div>
                            <div>
                                <p className="font-['Montserrat'] font-black text-[13px] uppercase text-[#1B5E20]">Delivered!</p>
                                <p className="font-['Hanken_Grotesk'] text-[12px] text-[#388E3C]">Your order arrived. Bon appétit!</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Order Items */}
                <div className="mb-5">
                    <OrderItemsList items={order.items} showTotal total={order.total} orderId={order.id} />
                </div>

                {/* Customer Info */}
                <div className="mb-7">
                    <OrderCustomerInfo order={order} />
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3">
                    {isDelivered && (
                        <Link to="/thank-you" state={{ order }}
                            className="w-full bg-[#BD001A] text-white font-['Hanken_Grotesk'] font-bold text-[13px] tracking-widest uppercase py-4 text-center hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                            <FiHeart size={14} /> LEAVE A REVIEW
                        </Link>
                    )}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Link to="/"
                            className="flex-1 bg-[#1A1C1C] text-white font-['Hanken_Grotesk'] font-bold text-[12px] tracking-widest uppercase py-4 text-center hover:bg-[#BD001A] transition-colors flex items-center justify-center gap-2">
                            <FiHome size={13} /> BACK TO HOME
                        </Link>
                        <Link to="/menu"
                            className="flex-1 bg-white border border-[#D0D0D0] text-[#5D5F5F] font-['Hanken_Grotesk'] font-bold text-[12px] tracking-widest uppercase py-4 text-center hover:border-[#1A1C1C] hover:text-[#1A1C1C] transition-colors flex items-center justify-center gap-2">
                            <FiShoppingBag size={13} /> ORDER MORE
                        </Link>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default OrderTracking
