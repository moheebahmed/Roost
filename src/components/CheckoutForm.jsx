import { FiMapPin, FiShoppingBag, FiCreditCard, FiDollarSign } from 'react-icons/fi'

function SectionHead({ label }) {
    return (
        <div className="bg-[#1A1C1C] px-5 py-3">
            <h2 className="font-['Montserrat'] font-black text-[12px] tracking-widest uppercase text-white">
                {label}
            </h2>
        </div>
    )
}
  
function ToggleBtn({ value, current, onSelect, Icon, label }) {
    const active = current === value
    return (
        <button
            type="button"
            onClick={() => onSelect(value)}
            className={`flex-1 flex flex-col items-center gap-2 py-4 border-2 transition-all cursor-pointer ${active ? 'border-[#BD001A] bg-[#FFF5F5]' : 'border-[#E8E8E8] hover:border-[#ADADAD]'
                }`}
        >
            <Icon size={20} className={active ? 'text-[#BD001A]' : 'text-[#ADADAD]'} />
            <span className={`font-['Hanken_Grotesk'] font-bold text-[12px] tracking-widest uppercase ${active ? 'text-[#BD001A]' : 'text-[#9A9C9C]'
                }`}>
                {label}
            </span>
        </button>
    )
}

function FormField({ label, name, type = 'text', placeholder, value, onChange, error, required }) {
    return (
        <div>
            <label className="font-['Hanken_Grotesk'] font-bold text-[11px] tracking-widest uppercase text-[#5D5F5F] block mb-1.5">
                {label} {required && <span className="text-[#BD001A]">*</span>}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full border px-3 py-3 font-['Hanken_Grotesk'] text-[14px] outline-none transition-colors bg-[#FAFAFA] ${error ? 'border-[#BD001A]' : 'border-[#E2E2E2] focus:border-[#1A1C1C]'
                    }`}
            />
            {error && <p className="text-[#BD001A] text-[11px] mt-1">{error}</p>}
        </div>
    )
}

/**
 * Checkout form sections
 * Props: form, errors, orderType, payMethod, onChange, onOrderTypeChange, onPayMethodChange
 */
function CheckoutForm({ form, errors, orderType, payMethod, onChange, onOrderTypeChange, onPayMethodChange }) {
    return (
        <>
            {/* Order Type */}
            <div className="bg-white border border-[#E8E8E8]">
                <SectionHead label="ORDER TYPE" />
                <div className="p-5 flex gap-3">
                    <ToggleBtn value="delivery" current={orderType} onSelect={onOrderTypeChange} Icon={FiMapPin} label="Delivery" />
                    <ToggleBtn value="pickup" current={orderType} onSelect={onOrderTypeChange} Icon={FiShoppingBag} label="Pickup" />
                </div>
            </div>

            {/* Personal Info */}
            <div className="bg-white border border-[#E8E8E8]">
                <SectionHead label="PERSONAL INFORMATION" />
                <div className="p-5 flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField label="First Name" name="firstName" placeholder="John" value={form.firstName} onChange={onChange} error={errors.firstName} required />
                        <FormField label="Last Name" name="lastName" placeholder="Doe" value={form.lastName} onChange={onChange} error={errors.lastName} required />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField label="Phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={onChange} error={errors.phone} required />
                        <FormField label="Email" name="email" type="email" placeholder="john@example.com" value={form.email} onChange={onChange} error={errors.email} required />
                    </div>
                </div>
            </div>

            {/* Delivery Address */}
            {orderType === 'delivery' && (
                <div className="bg-white border border-[#E8E8E8]">
                    <SectionHead label="DELIVERY ADDRESS" />
                    <div className="p-5 flex flex-col gap-4">
                        <FormField label="Street Address" name="address" placeholder="123 Main Street, Apt 4B" value={form.address} onChange={onChange} error={errors.address} required />
                        <FormField label="City" name="city" placeholder="New York" value={form.city} onChange={onChange} error={errors.city} required />
                    </div>
                </div>
            )}

            {/* Payment Method */}
            <div className="bg-white border border-[#E8E8E8]">
                <SectionHead label="PAYMENT METHOD" />
                <div className="p-5 flex gap-3">
                    <ToggleBtn value="cash" current={payMethod} onSelect={onPayMethodChange} Icon={FiDollarSign} label="Cash" />
                    <ToggleBtn value="card" current={payMethod} onSelect={onPayMethodChange} Icon={FiCreditCard} label="Card" />
                </div>
            </div>

            {/* Special Instructions */}
            <div className="bg-white border border-[#E8E8E8]">
                <SectionHead label="SPECIAL INSTRUCTIONS (optional)" />
                <div className="p-5">
                    <textarea
                        name="notes"
                        value={form.notes}
                        onChange={onChange}
                        rows={3}
                        placeholder="E.g. Extra sauce, no onions, ring the doorbell..."
                        className="w-full border border-[#E2E2E2] px-3 py-3 font-['Hanken_Grotesk'] text-[14px] outline-none focus:border-[#1A1C1C] transition-colors bg-[#FAFAFA] resize-none"
                    />
                </div>
            </div>
        </>
    )
}

export default CheckoutForm
