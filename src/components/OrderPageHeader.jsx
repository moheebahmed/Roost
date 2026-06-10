import { Link } from 'react-router-dom'
import { FiArrowLeft, FiChevronRight } from 'react-icons/fi'

/**
 * Reusable top header bar for Cart / Checkout pages
 * Props: icon, title, subtitle, backTo, backLabel, steps (optional array)
 */
function OrderPageHeader({ icon: Icon, title, subtitle, backTo, backLabel, steps, activeStep }) {
    return (
        <div className="bg-white border-b border-[#E8E8E8]">
            <div className="max-w-[1240px] mx-auto px-5 md:px-10 py-5 flex items-center justify-between">

                {/* Left: icon + title */}
                <div className="flex items-center gap-3">
                    {Icon && (
                        <div className="w-9 h-9 bg-[#BD001A] flex items-center justify-center shrink-0">
                            <Icon size={16} className="text-white" />
                        </div>
                    )}
                    <div>
                        <h1 className="font-['Montserrat'] font-black text-[20px] md:text-[24px] uppercase text-[#1A1C1C] leading-none">
                            {title}
                        </h1>
                        {subtitle && (
                            <p className="font-['Hanken_Grotesk'] text-[12px] text-[#9A9C9C] mt-0.5">{subtitle}</p>
                        )}
                    </div>
                </div>
                {/* Center: step indicator */}
                {steps && (
                    <div className="hidden md:flex items-center gap-2 font-['Hanken_Grotesk'] text-[12px] font-bold tracking-widest uppercase">
                        {steps.map((step, i) => (
                            <span key={step} className="flex items-center gap-2">
                                <span className={step === activeStep ? 'text-[#BD001A]' : 'text-[#9A9C9C]'}>
                                    {step}
                                </span>
                                {i < steps.length - 1 && (
                                    <FiChevronRight size={13} className="text-[#D0D0D0]" />
                                )}
                            </span>
                        ))}
                    </div>
                )}

                {/* Right: back link */}
                {backTo && (
                    <Link
                        to={backTo}
                        className="font-['Hanken_Grotesk'] font-bold text-[12px] tracking-widest uppercase text-[#5D5F5F] flex items-center gap-2 hover:text-[#BD001A] transition-colors"
                    >
                        <FiArrowLeft size={14} /> {backLabel}
                    </Link>
                )}
            </div>
        </div>
    )
}

export default OrderPageHeader
