import { FiMapPin, FiPhone } from 'react-icons/fi'

/**
 * Reusable customer delivery/contact info block
 * Used in Confirmation and Tracking pages
 * Props: order { customer, orderType, payMethod }
 */
function OrderCustomerInfo({ order }) {
    const { customer, orderType, payMethod } = order

    return (
        <div className="bg-white border border-[#E8E8E8] px-5 py-4 grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Delivery / Pickup */}
            <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#FFF0F0] flex items-center justify-center shrink-0 mt-0.5">
                    <FiMapPin size={13} className="text-[#BD001A]" />
                </div>
                <div>
                    <p className="font-['Hanken_Grotesk'] font-bold text-[11px] tracking-widest uppercase text-[#9A9C9C] mb-1">
                        {orderType === 'pickup' ? 'Pickup' : 'Delivering To'}
                    </p>
                    <p className="font-['Hanken_Grotesk'] font-bold text-[13px] text-[#1A1C1C]">
                        {customer?.firstName} {customer?.lastName}
                    </p>
                    {orderType === 'delivery' && customer?.address && (
                        <p className="font-['Hanken_Grotesk'] text-[12px] text-[#5D5F5F]">
                            {customer.address}, {customer.city}
                        </p>
                    )}
                    {payMethod && (
                        <p className="font-['Hanken_Grotesk'] text-[11px] text-[#ADADAD] capitalize mt-1">
                            Payment: {payMethod}
                        </p>
                    )}
                </div>
            </div>

            {/* Contact */}
            <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#FFF0F0] flex items-center justify-center shrink-0 mt-0.5">
                    <FiPhone size={13} className="text-[#BD001A]" />
                </div>
                <div>
                    <p className="font-['Hanken_Grotesk'] font-bold text-[11px] tracking-widest uppercase text-[#9A9C9C] mb-1">
                        Contact
                    </p>
                    <p className="font-['Hanken_Grotesk'] font-bold text-[13px] text-[#1A1C1C]">
                        {customer?.phone}
                    </p>
                    <p className="font-['Hanken_Grotesk'] text-[12px] text-[#5D5F5F]">
                        {customer?.email}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OrderCustomerInfo
