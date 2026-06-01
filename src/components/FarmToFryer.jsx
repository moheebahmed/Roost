import roostLogo from '../assets/images/Roost & Co Logo.png'
import { MdOutlineVerified } from 'react-icons/md'
import { LuTruck } from 'react-icons/lu'
import { PiLeafLight } from 'react-icons/pi'

const features = [
    {
        icon: <MdOutlineVerified size={28} className="text-[#E61E2A] mt-0.5 shrink-0" />,
        title: 'hand-breaded daily',
        desc: 'We never use frozen pre-breaded chicken. Every piece is prepared in-house, by hand, every morning.',
    },
    {
        icon: <LuTruck size={28} className="text-[#E61E2A] mt-0.5 shrink-0" />,
        title: 'locally sourced',
        desc: 'We partner with local farms to ensure our poultry is ethically raised and delivered fresh, never frozen.',
    },
    {
        icon: <PiLeafLight size={28} className="text-[#E61E2A] mt-0.5 shrink-0" />,
        title: 'sustainable oil',
        desc: 'Our high-velocity fryers use sustainable vegetable oils filtered twice daily for peak hygiene and taste.',
    },
]

function FarmToFryer() {
    return (
        <section className="bg-[#2F3131]">
            <div className="max-w-[1240px] mx-auto px-5 md:px-10 py-12 md:py-16 flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-28">

                {/* Left — Logo */}
                <div className="bg-white shrink-0 flex items-center justify-center w-full max-w-[280px] md:max-w-[300px] mx-auto md:mx-0 p-6">
                    <img src={roostLogo} alt="Roost & Co" className="w-full object-contain" />
                </div>

                {/* Right — Content */}
                <div className="flex-1 w-full">
                    <h2 className="font-['Montserrat'] font-black text-[32px] md:text-[48px] lg:text-[64px] leading-tight uppercase text-white">
                        farm <br className="hidden md:block" />
                        <span className="text-[#E61E2A]">to</span> fryer
                    </h2>

                    <div className="flex flex-col gap-6 pt-6">
                        {features.map((item) => (
                            <div key={item.title} className="flex items-start gap-4">
                                {item.icon}
                                <div>
                                    <p className="font-['Hanken_Grotesk'] font-bold text-[13px] tracking-[0.7px] uppercase text-white mb-1">
                                        {item.title}
                                    </p>
                                    <p className="font-['Hanken_Grotesk'] text-[15px] leading-[1.6] text-gray-400">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default FarmToFryer
