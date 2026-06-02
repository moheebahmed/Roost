import { FiCheck, FiPackage, FiTruck, FiMapPin } from 'react-icons/fi'

const STEPS = [
    { id: 0, icon: FiCheck,   label: 'Order Placed', desc: 'We received your order'         },
    { id: 1, icon: FiPackage, label: 'Preparing',    desc: 'Kitchen is cooking your food'   },
    { id: 2, icon: FiTruck,   label: 'On The Way',   desc: 'Your order is out for delivery'  },
    { id: 3, icon: FiMapPin,  label: 'Delivered',    desc: 'Enjoy your meal!'                },
]

/**
 * Animated order tracking stepper
 * Props: currentStep (0-3)
 */
function TrackingSteps({ currentStep }) {
    return (
        <div className="relative">
            {/* Progress line background */}
            <div className="absolute top-5 left-5 right-5 h-[2px] bg-[#F0F0F0] hidden md:block" />
            {/* Progress line fill */}
            <div
                className="absolute top-5 left-5 h-[2px] bg-[#BD001A] hidden md:block transition-all duration-700"
                style={{ width: `${(currentStep / (STEPS.length - 1)) * 75}%` }}
            />

            <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-0 relative z-10">
                {STEPS.map((step) => {
                    const Icon = step.icon
                    const done   = currentStep > step.id
                    const active = currentStep === step.id

                    return (
                        <div key={step.id} className="flex md:flex-col items-center gap-4 md:gap-3 md:w-1/4">
                            {/* Circle */}
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 border-2 ${
                                done
                                    ? 'bg-[#BD001A] border-[#BD001A]'
                                    : active
                                    ? 'bg-white border-[#BD001A] shadow-[0_0_0_4px_rgba(189,0,26,0.15)]'
                                    : 'bg-white border-[#E0E0E0]'
                            }`}>
                                {done ? (
                                    <FiCheck size={16} className="text-white" strokeWidth={3} />
                                ) : (
                                    <Icon size={16} className={active ? 'text-[#BD001A]' : 'text-[#CECECE]'} />
                                )}
                            </div>

                            {/* Label */}
                            <div className="md:text-center">
                                <p className={`font-['Montserrat'] font-black text-[12px] uppercase transition-colors ${
                                    done || active ? 'text-[#1A1C1C]' : 'text-[#CECECE]'
                                }`}>
                                    {step.label}
                                </p>
                                <p className={`font-['Hanken_Grotesk'] text-[11px] mt-0.5 transition-colors ${
                                    active ? 'text-[#BD001A]' : done ? 'text-[#9A9C9C]' : 'text-[#D8D8D8]'
                                }`}>
                                    {active && '● '}{step.desc}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TrackingSteps
