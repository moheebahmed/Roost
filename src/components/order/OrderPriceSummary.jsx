/**
 * Reusable price breakdown used in Cart, Checkout, Confirmation, Tracking
 * Props: subtotal, delivery, tax, total, label (optional, default 'TOTAL')
 */
function OrderPriceSummary({ subtotal, delivery, tax, total, label = 'TOTAL' }) {
    return (
        <div className="flex flex-col gap-2.5">
            <div className="flex justify-between">
                <span className="font-['Hanken_Grotesk'] text-[13px] text-[#5D5F5F]">Subtotal</span>
                <span className="font-['Hanken_Grotesk'] font-bold text-[13px] text-[#1A1C1C]">${subtotal}</span>
            </div>
            <div className="flex justify-between">
                <span className="font-['Hanken_Grotesk'] text-[13px] text-[#5D5F5F]">Delivery fee</span>
                <span className="font-['Hanken_Grotesk'] font-bold text-[13px] text-[#1A1C1C]">${delivery}</span>
            </div>
            <div className="flex justify-between">
                <span className="font-['Hanken_Grotesk'] text-[13px] text-[#5D5F5F]">Tax (8%)</span>
                <span className="font-['Hanken_Grotesk'] font-bold text-[13px] text-[#1A1C1C]">${tax}</span>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-[#F0F0F0] mt-1">
                <span className="font-['Montserrat'] font-black text-[14px] uppercase text-[#1A1C1C]">
                    {label}
                </span>
                <span className="font-['Montserrat'] font-black text-[22px] text-[#BD001A] leading-none">
                    ${total}
                </span>
            </div>
        </div>
    )
}

export default OrderPriceSummary
