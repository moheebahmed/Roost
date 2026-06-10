import img1 from '../assets/images/1-b.png'
import img3 from '../assets/images/3-b.png'
import img4 from '../assets/images/4-b.png'
import img2 from '../assets/images/2-b.png'
import { FiArrowRight, FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const lineupItems = [
  { id: 101, name: 'crispy mega bucket', price: '$29.99', image: img1, category: 'BUCKETS', tag: 'BEST SELLER' },
  { id: 102, name: 'classic roost burger', price: '$12.49', image: img2, category: 'BURGERS', tag: null },
  { id: 103, name: 'signature dust FRIESFRIES', price: '$4.99', image: img3, category: 'SIDES', tag: null },
  { id: 104, name: 'NASHVILLE hot WINGS', price: '$16.99', image: img4, category: 'BUCKETS', tag: 'NEW ADDITION' },
]

function SignatureLineup() {
  const { addToCart } = useCart()

  const [card1, card2, card3, card4] = lineupItems

  return (
    <section className="py-14">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-2">
          <div>
            <h2 className="font-['Montserrat'] font-bold text-[20px] md:text-[32px] leading-tight uppercase text-gray-900">
              the signature lineup 
            </h2>
            <p className="font-['Hanken_Grotesk'] font-normal text-[14px] md:text-[16px] leading-[25.6px] text-gray-500 mt-1">
              Our most-wanted heavy hitters.
            </p>
          </div>
          <Link to="/menu" className="font-['Hanken_Grotesk'] font-bold text-[12px] md:text-[14px] tracking-[0.7px] uppercase text-[#BD001A] hover:underline flex items-center gap-1 shrink-0">
            view full menu <FiArrowRight size={16} />
          </Link>
        </div>

        {/* Top Row */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 mb-4">

          {/* Card 1 — Crispy Mega Bucket */}
          <div className="relative bg-[#2a2a2a] overflow-hidden flex flex-col justify-end md:w-[760px] min-h-[320px] md:min-h-[400px] md:h-[478px]">
            <img src={card1.image} className="absolute inset-0 w-full h-full object-cover opacity-90" />
            <div className="relative z-10 p-6">
              <span className="bg-[#E61E2A] text-white font-['Hanken_Grotesk'] font-medium text-[13px] leading-[12px] uppercase px-[12px] py-[4px] mb-3 inline-block">
                best seller
              </span>
              <h3 className="font-['Montserrat'] font-bold text-[20px] md:text-[24px] leading-[31.2px] uppercase text-white mb-2">
                {card1.name}
              </h3>
              <p className="font-['Hanken_Grotesk'] font-normal text-[14px] md:text-[16px] leading-[25.6px] text-gray-300 mb-4 max-w-xs md:max-w-[51%]">
                12 pieces of our legendary hand-breaded chicken, served with two large sides and house biscuits.
              </p>
              <div className="flex items-center gap-4">
                <span className="font-['Montserrat'] font-bold text-[20px] md:text-[24px] text-white">{card1.price}</span>
                <button
                  onClick={() => addToCart(card1)}
                  className="font-['Hanken_Grotesk'] font-bold text-[13px] md:text-[14px] leading-[14px] tracking-[0.7px] uppercase border border-white text-white px-4 md:px-5 py-2.5 hover:bg-white hover:text-gray-900 transition-colors cursor-pointer"
                >
                  add to order
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 — Classic Roost Burger */}
          <div className="bg-[#F3F3F3] overflow-hidden flex flex-col md:w-[65%] md:relative md:left-[34%]">
            <img src={card2.image} className="w-full h-[200px] md:h-[250px] object-cover" />
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-['Montserrat'] font-bold text-[20px] md:text-[24px] leading-[31.2px] uppercase text-gray-900 mb-1">
                {card2.name}
              </h3>
              <p className="font-['Hanken_Grotesk'] font-normal text-[15px] md:text-[16px] leading-[25.6px] text-[#5D5F5F]">
                Brioche bun, spicy mayo, and the crunchiest breast in town.
              </p>
              <div className="flex items-center justify-between mt-auto pt-3">
                <span className="font-['Montserrat'] font-bold text-[20px] md:text-[24px] leading-[31.2px] text-[#BD001A]">{card2.price}</span>
                <button
                  onClick={() => addToCart(card2)}
                  className="bg-gray-900 text-white w-8 h-8 flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer"
                >
                  <FiPlus size={18} color="white" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4">

          {/* Card 3 — Signature Dust Fries */}
          <div className="bg-[#F3F3F3] overflow-hidden flex flex-col md:w-[65%]">
            <img src={card3.image} className="w-full h-[200px] md:h-[250px] object-cover" />
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-['Montserrat'] font-bold text-[20px] md:text-[24px] leading-[31.2px] uppercase text-gray-900 mb-1">
                {card3.name}
              </h3>
              <p className="font-['Hanken_Grotesk'] font-normal text-[15px] md:text-[16px] leading-[25.6px] text-[#5D5F5F]">
                Golden-cut fries tossed in our secret umami spice blend.
              </p>
              <div className="flex items-center justify-between mt-auto pt-3">
                <span className="font-['Montserrat'] font-bold text-[20px] md:text-[24px] leading-[31.2px] text-[#BD001A]">{card3.price}</span>
                <button
                  onClick={() => addToCart(card3)}
                  className="bg-gray-900 text-white w-8 h-8 flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer"
                >
                  <FiPlus size={18} color="white" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 4 — Nashville Hot Wings */}
          <div className="bg-white overflow-hidden border border-[#E2E2E2] flex flex-col md:flex-row md:items-center md:gap-6 md:p-6 md:w-[760px] md:h-[478.38px] md:relative md:right-[34%]">
            <div className="flex-1 p-5 md:p-0">
              <span className="font-['Hanken_Grotesk'] font-bold text-[13px] md:text-[14px] leading-[14px] tracking-[0.7px] uppercase text-red-600 mb-2 block">
                new addition
              </span>
              <h3 className="font-['Montserrat'] font-bold text-[20px] md:text-[24px] leading-[31.2px] uppercase text-gray-900 mb-1">
                {card4.name}
              </h3>
              <p className="font-['Hanken_Grotesk'] font-normal text-[14px] md:text-[16px] leading-[25.6px] text-[#5D5F5F] mb-4">
                Our signature wings drenched in authentic Tennessee heat. Choose your burn level from 'Spark' to 'Inferno'.
              </p>
              <button
                onClick={() => addToCart(card4)}
                className="font-['Montserrat'] font-bold text-[12px] tracking-widest uppercase bg-[#1A1C1C] text-white px-5 py-2.5 hover:bg-[#BD001A] transition-colors cursor-pointer"
              >
                add to Order
              </button>
            </div>
            <div className="w-full h-[200px] md:w-44 md:h-44">
              <img
                src={card4.image}
                className="w-full h-full object-cover rounded-[95px] animate-[spin_8s_linear_infinite]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default SignatureLineup
