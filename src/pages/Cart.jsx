import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import OrderPageHeader from '../components/order/OrderPageHeader'
import OrderPriceSummary from '../components/order/OrderPriceSummary'
import { useCart } from '../context/CartContext'
import { FiTrash2, FiPlus, FiMinus, FiShoppingBag, FiTag } from 'react-icons/fi'

function Cart() {
    const { cartItems, increaseQty, decreaseQty, removeItem, clearCart, totalItems, totalPrice } = useCart()
    const navigate = useNavigate()

    const delivery = totalPrice > 0 ? 2.99 : 0
    const tax = totalPrice * 0.08
    const grandTotal = totalPrice + delivery + tax

    return (
        <div className="pt-16 md:pt-20 min-h-screen bg-[#F2F2F2]">
            <Header />

            <OrderPageHeader
                icon={FiShoppingBag}
                title="YOUR ORDER"
                subtitle={totalItems > 0 ? `${totalItems} item${totalItems > 1 ? 's' : ''} in your cart` : 'Your cart is empty'}
                backTo="/menu"
                backLabel="BACK TO MENU"
            />

            <div className="max-w-[1240px] mx-auto px-5 md:px-10 py-10 md:py-12">

                {/* Empty State */}
                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-28 gap-5">
                        <div className="w-24 h-24 bg-white border-2 border-dashed border-[#E0E0E0] rounded-full flex items-center justify-center">
                            <FiShoppingBag size={36} className="text-[#CECECE]" />
                        </div>
                        <h2 className="font-['Montserrat'] font-black text-[20px] uppercase text-[#1A1C1C]">
                            Nothing here yet
                        </h2>
                        <p className="font-['Hanken_Grotesk'] text-[14px] text-[#9A9C9C] text-center max-w-xs">
                            Browse our menu and add your favourite items to get started.
                        </p>
                        <Link to="/menu" className="mt-2 bg-[#E61E2A] text-white font-['Hanken_Grotesk'] font-bold text-[12px] tracking-widest uppercase px-10 py-4 hover:bg-red-700 transition-colors">
                            VIEW MENU
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-7 items-start">

                        {/* Left: Items */}
                        <div className="flex-1 flex flex-col gap-3">
                            <div className="flex justify-end mb-1">
                                <button onClick={clearCart} className="font-['Hanken_Grotesk'] font-bold text-[11px] tracking-widest uppercase text-[#ADADAD] hover:text-[#BD001A] transition-colors flex items-center gap-1.5 cursor-pointer">
                                    <FiTrash2 size={12} /> CLEAR ALL
                                </button>
                            </div>

                            {cartItems.map((item) => (
                                <div key={`${item.id}-${item.category}`} className="bg-white border border-[#E8E8E8] flex items-center overflow-hidden">
                                    <div className="w-1 self-stretch bg-[#BD001A] shrink-0" />
                                    <img src={item.image}
                                    //  alt={item.name} 
                                    className="w-20 h-20 md:w-[100px] md:h-[100px] object-cover shrink-0" />
                                    <div className="flex-1 min-w-0 px-4 py-3">
                                        {item.tag && (
                                            <span className="font-['Hanken_Grotesk'] font-bold text-[10px] tracking-widest uppercase text-[#BD001A] block mb-0.5">
                                                {item.tag}
                                            </span>
                                        )}
                                        <h3 className="font-['Montserrat'] font-black text-[14px] md:text-[16px] uppercase text-[#1A1C1C] leading-tight">
                                            {item.name}
                                        </h3>
                                        <p className="font-['Montserrat'] font-bold text-[13px] text-[#BD001A] mt-1">
                                            {item.price} <span className="text-[#ADADAD] font-normal font-['Hanken_Grotesk']">/ each</span>
                                        </p>
                                    </div>
                                    <div className="flex items-center shrink-0 border border-[#E8E8E8]">
                                        <button onClick={() => decreaseQty(item.id, item.category)} className="w-9 h-9 flex items-center justify-center text-[#5D5F5F] hover:bg-[#F5F5F5] transition-colors cursor-pointer">
                                            <FiMinus size={13} />
                                        </button>
                                        <span className="font-['Montserrat'] font-black text-[14px] w-9 text-center text-[#1A1C1C] border-x border-[#E8E8E8]">
                                            {item.quantity}
                                        </span>
                                        <button onClick={() => increaseQty(item.id, item.category)} className="w-9 h-9 flex items-center justify-center text-[#5D5F5F] hover:bg-[#F5F5F5] transition-colors cursor-pointer">
                                            <FiPlus size={13} />
                                        </button>
                                    </div>
                                    <div className="flex flex-col items-end justify-between px-4 py-3 shrink-0 self-stretch">
                                        <button onClick={() => removeItem(item.id, item.category)} className="text-[#DEDEDE] hover:text-[#BD001A] transition-colors cursor-pointer">
                                            <FiTrash2 size={14} />
                                        </button>
                                        <span className="font-['Montserrat'] font-black text-[16px] text-[#1A1C1C]">
                                            ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right: Summary */}
                        <div className="w-full lg:w-[360px] shrink-0 flex flex-col gap-4 sticky top-24">

                            {/* Promo Code */}
                            <div className="bg-white border border-[#E8E8E8] p-5">
                                <div className="flex items-center gap-2 mb-3">
                                    <FiTag size={14} className="text-[#BD001A]" />
                                    <p className="font-['Hanken_Grotesk'] font-bold text-[12px] tracking-widest uppercase text-[#1A1C1C]">PROMO CODE</p>
                                </div>
                                <div className="flex">
                                    <input type="text" placeholder="Enter code..." className="flex-1 border border-[#E2E2E2] border-r-0 px-3 py-2.5 font-['Hanken_Grotesk'] text-[13px] outline-none focus:border-[#BD001A] bg-[#FAFAFA]" />
                                    <button className="bg-[#1A1C1C] text-white font-['Hanken_Grotesk'] font-bold text-[11px] tracking-widest uppercase px-4 hover:bg-[#BD001A] transition-colors cursor-pointer shrink-0">APPLY</button>
                                </div>
                            </div>

                            {/* Order Summary */}
                            <div className="bg-white border border-[#E8E8E8] overflow-hidden">
                                <div className="bg-[#1A1C1C] px-5 py-4">
                                    <h2 className="font-['Montserrat'] font-black text-[14px] tracking-widest uppercase text-white">ORDER SUMMARY</h2>
                                </div>
                                <div className="p-5">
                                    <OrderPriceSummary
                                        subtotal={totalPrice.toFixed(2)}
                                        delivery={delivery.toFixed(2)}
                                        tax={tax.toFixed(2)}
                                        total={grandTotal.toFixed(2)}
                                        label="TOTAL"
                                    />
                                    <button onClick={() => navigate('/checkout')} className="mt-5 w-full bg-[#E61E2A] text-white font-['Hanken_Grotesk'] font-bold text-[13px] tracking-widest uppercase py-4 hover:bg-red-700 transition-colors cursor-pointer">
                                        PLACE ORDER →
                                    </button>
                                    <Link to="/menu" className="mt-2 w-full border border-[#D0D0D0] text-[#5D5F5F] font-['Hanken_Grotesk'] font-bold text-[12px] tracking-widest uppercase py-3.5 hover:border-[#1A1C1C] hover:text-[#1A1C1C] transition-colors text-center block">
                                        + ADD MORE ITEMS
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    )
}

export default Cart
