/**
 * Reusable items list used in Checkout sidebar, Confirmation, Tracking
 * Props: items, showTotal (bool), total (string), title, orderId
 */
function OrderItemsList({ items, showTotal, total, title = 'YOUR ITEMS', orderId }) {
    return (
        <div className="bg-white border border-[#E8E8E8] overflow-hidden">
            <div className="bg-[#1A1C1C] px-5 py-3 flex items-center justify-between">
                <h2 className="font-['Montserrat'] font-black text-[12px] tracking-widest uppercase text-white">
                    {title}
                </h2>
                <span className="font-['Hanken_Grotesk'] text-[11px] text-[#6C6E6E]">
                    {orderId ? `#${orderId}` : `${items.length} item${items.length !== 1 ? 's' : ''}`}
                </span>
            </div>

            <div className="divide-y divide-[#F5F5F5]">
                {items.map((item, i) => (
                    <div key={`${item.id}-${item.category}-${i}`} className="flex items-center gap-3 px-5 py-3">
                        <img
                            src={item.image}
                            // alt={item.name}
                            className="w-12 h-12 object-cover shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                            <p className="font-['Montserrat'] font-black text-[12px] uppercase text-[#1A1C1C] truncate">
                                {item.name}
                            </p>
                            <p className="font-['Hanken_Grotesk'] text-[11px] text-[#9A9C9C]">
                                {item.price} × {item.quantity}
                            </p>
                        </div>
                        <span className="font-['Montserrat'] font-bold text-[13px] text-[#1A1C1C] shrink-0">
                            ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                        </span>
                    </div>
                ))}
            </div>

            {showTotal && total && (
                <div className="px-5 py-4 border-t border-[#F0F0F0] flex justify-between items-center">
                    <span className="font-['Montserrat'] font-black text-[13px] uppercase text-[#1A1C1C]">
                        TOTAL PAID
                    </span>
                    <span className="font-['Montserrat'] font-black text-[20px] text-[#BD001A]">
                        ${total}
                    </span>
                </div>
            )}
        </div>
    )
}

export default OrderItemsList
