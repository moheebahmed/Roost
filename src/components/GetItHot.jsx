import containerBg from '../assets/images/Container.png'

function GetItHot() {
    return (
        <section className="bg-[#F2F2F2] relative overflow-hidden py-16 md:py-20">

            {/* Background Text Image */}
            <img
                src={containerBg}
      
                className="absolute inset-0 w-full h-full object-contain opacity-100 pointer-events-none select-none"
            />

            {/* Content */}
            <div className="relative z-10 max-w-[1240px] mx-auto px-5 md:px-10 flex flex-col items-center text-center">

                <h2 className="font-['Montserrat'] font-black text-[30px] md:text-[64px] leading-tight uppercase text-[#1A1C1C] mb-4 md:mb-6">
                    get it while <br /> it's hot
                </h2>

                <p className="font-['Hanken_Grotesk'] text-[16px] md:text-[18px] leading-[1.6] text-[#5D5F5F] pb-8 md:pb-10 max-w-lg">
                    Skip the line and order ahead for pickup or get the crunch delivered straight to your door.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                    <a href="#" className="font-['Hanken_Grotesk'] font-bold text-[13px] tracking-[0.7px] uppercase bg-[#E61E2A] text-white px-8 md:px-12 py-4 md:py-6 hover:bg-red-700 transition-colors w-full sm:w-auto text-center">
                        Order for pickup
                    </a>
                    <a href="#" className="font-['Montserrat'] font-bold text-[13px] tracking-widest uppercase bg-[#E2E2E2] text-[#1A1C1C] px-8 md:px-12 py-4 md:py-6 hover:bg-gray-300 transition-colors w-full sm:w-auto text-center">
                        delivery options
                    </a>
                </div>

            </div>
        </section>
    )
}

export default GetItHot
