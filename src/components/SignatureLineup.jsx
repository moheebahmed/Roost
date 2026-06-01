import img1 from '../assets/images/1-b.png'
import img3 from '../assets/images/3-b.png'
import img4 from '../assets/images/4-b.png'
import img2 from '../assets/images/2-b.png'
import { FiArrowRight, FiPlus } from 'react-icons/fi'

function SignatureLineup() {
  return (
    <section className="py-10 md:py-14">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-3">
          <div>
            <h2 className="font-['Montserrat'] font-bold text-[20px] md:text-[32px] leading-tight uppercase text-gray-900">
              THE SIGNATURE LINEUP
            </h2>
            <p className="font-['Hanken_Grotesk'] text-[14px] md:text-[16px] text-gray-500 mt-1">
              Our most-wanted heavy hitters.
            </p>
          </div>
          <a href="#" className="font-['Hanken_Grotesk'] font-bold text-[13px] tracking-[0.7px] uppercase text-[#BD001A] hover:underline flex items-center gap-1 shrink-0">
            VIEW FULL MENU <FiArrowRight size={16} />
          </a>
        </div>

        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

          {/* Card 1 — Crispy Mega Bucket */}
          <div className="relative bg-[#2a2a2a] overflow-hidden flex flex-col justify-end min-h-[300px] md:min-h-[420px]">
            <img src={img1} alt="Crispy Mega Bucket" className="absolute inset-0 w-full h-full object-cover opacity-90" />
            <div className="relative z-10 p-5 md:p-6">
              <span className="bg-[#E61E2A] text-white font-['Hanken_Grotesk'] font-bold text-[11px] uppercase px-3 py-1 mb-3 inline-block">
                BEST SELLER
              </span>
              <h3 className="font-['Montserrat'] font-bold text-[18px] md:text-[24px] uppercase text-white mb-2">
                CRISPY MEGA BUCKET
              </h3>
              <p className="font-['Hanken_Grotesk'] text-[14px] md:text-[15px] text-gray-300 mb-4 max-w-sm">
                12 pieces of our legendary hand-breaded chicken, served with two large sides and house biscuits.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="font-['Montserrat'] font-bold text-[20px] md:text-[24px] text-white">$29.99</span>
                <a href="#" className="font-['Hanken_Grotesk'] font-bold text-[12px] uppercase border border-white text-white px-4 py-2.5 hover:bg-white hover:text-gray-900 transition-colors">
                  ADD TO ORDER
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 — Classic Roost Burger */}
          <div className="bg-[#F3F3F3] overflow-hidden flex flex-col">
            <img src={img2} alt="Classic Roost Burger" className="w-full h-[200px] md:h-[260px] object-cover" />
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-['Montserrat'] font-bold text-[18px] md:text-[22px] uppercase text-gray-900 mb-1">
                CLASSIC ROOST BURGER
              </h3>
              <p className="font-['Hanken_Grotesk'] text-[14px] md:text-[15px] text-[#5D5F5F]">
                Brioche bun, spicy mayo, and the crunchiest breast in town.
              </p>
              <div className="flex items-center justify-between mt-auto pt-4">
                <span className="font-['Montserrat'] font-bold text-[20px] md:text-[22px] text-[#BD001A]">$12.49</span>
                <button className="bg-gray-900 text-white w-9 h-9 flex items-center justify-center hover:bg-red-600 transition-colors">
                  <FiPlus size={18} color="white" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Card 3 — Signature Dust Fries */}
          <div className="bg-[#F3F3F3] overflow-hidden flex flex-col">
            <img src={img3} alt="Signature Dust Fries" className="w-full h-[200px] md:h-[260px] object-cover" />
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-['Montserrat'] font-bold text-[18px] md:text-[22px] uppercase text-gray-900 mb-1">
                SIGNATURE DUST FRIES
              </h3>
              <p className="font-['Hanken_Grotesk'] text-[14px] md:text-[15px] text-[#5D5F5F]">
                Golden-cut fries tossed in our secret umami spice blend.
              </p>
              <div className="flex items-center justify-between mt-auto pt-4">
                <span className="font-['Montserrat'] font-bold text-[20px] md:text-[22px] text-[#BD001A]">$4.99</span>
                <button className="bg-gray-900 text-white w-9 h-9 flex items-center justify-center hover:bg-red-600 transition-colors">
                  <FiPlus size={18} color="white" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 4 — Nashville Hot Wings */}
          <div className="bg-white overflow-hidden border border-[#E2E2E2] flex flex-col md:flex-row">
            <div className="flex-1 p-5 md:p-6 flex flex-col justify-center">
              <span className="font-['Hanken_Grotesk'] font-bold text-[12px] uppercase text-red-600 mb-2 block">
                NEW ADDITION
              </span>
              <h3 className="font-['Montserrat'] font-bold text-[18px] md:text-[22px] uppercase text-gray-900 mb-2">
                NASHVILLE HOT WINGS
              </h3>
              <p className="font-['Hanken_Grotesk'] text-[14px] md:text-[15px] text-[#5D5F5F] mb-4">
                Our signature wings drenched in authentic Tennessee heat. Choose your burn level from 'Spark' to 'Inferno'.
              </p>
              <a href="#" className="font-['Montserrat'] font-bold text-[12px] uppercase text-gray-900 border-b-2 border-gray-900 pb-0.5 hover:text-red-600 hover:border-red-600 transition-colors w-fit">
                LEARN MORE
              </a>
            </div>
            <div className="w-full h-[200px] md:w-48 md:h-auto shrink-0">
              <img src={img4} alt="Nashville Hot Wings" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default SignatureLineup
