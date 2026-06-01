import kantaChamach from '../assets/images/kanta or chamach.png'

function QualityCTA() {
    return (
        <section className="bg-[#F5F5F5] py-10 md:py-14 px-5 md:px-10">
            <div className="max-w-[1240px] mx-auto">
                <div className="relative bg-[#BD001A] overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between px-7 md:px-16 py-10 md:py-14 gap-8">

                    {/* Background image — only desktop */}
                    <img
                        src={kantaChamach}
                        aria-hidden="true"
                        className="hidden md:block absolute right-0 top-0 h-full w-auto object-contain opacity-20 pointer-events-none"
                    />

                    {/* Left — Text */}
                    <div className="relative z-10 flex-1">
                        <h2 className="font-['Montserrat'] font-black text-white text-[36px] sm:text-[44px] md:text-[56px] lg:text-[64px] leading-[1.1] mb-4">
                            Fuel Your<br />Faster.
                        </h2>
                        <p className="font-['Hanken_Grotesk'] text-[14px] md:text-[16px] leading-[1.7] text-white/80 max-w-sm md:max-w-md">
                            Ready for premium chicken that doesn't hold you back?
                            Order now for pickup or high-velocity delivery.
                        </p>
                    </div>

                    {/* Right — Buttons */}
                    <div className="relative z-10 flex flex-col sm:flex-row md:flex-col lg:flex-row items-stretch gap-3 shrink-0 w-full md:w-auto">
                        <a
                            href="#"
                            className="font-['Hanken_Grotesk'] font-bold text-[13px] uppercase bg-[#1A1C1C] text-white py-4 px-8 text-center hover:bg-black transition-colors"
                        >
                            ORDER MOBILE
                        </a>
                        <a
                            href="#"
                            className="font-['Hanken_Grotesk'] font-bold text-[13px] uppercase border-2 border-white text-white py-4 px-8 text-center hover:bg-white hover:text-[#BD001A] transition-colors"
                        >
                            FIND LOCATION
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default QualityCTA
