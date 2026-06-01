import { FiCheckCircle } from 'react-icons/fi'
import { GiKnifeFork } from 'react-icons/gi'
import { TbLeaf } from 'react-icons/tb'

const standards = [
    {
        icon: <FiCheckCircle size={32} className="text-[#BD001A]" />,
        title: 'No Antibiotics Ever',
        desc: 'Our poultry is raised in cage-free environments and fed a 100% vegetarian diet. We never use growth hormones or antibiotics, ensuring the cleanest protein possible.',
    },
    {
        icon: <GiKnifeFork size={32} className="text-[#BD001A]" />,
        title: 'Halal Certified',
        desc: 'Inclusivity is at our core. All our chicken is 100% Halal certified, prepared following strict ethical and hygienic guidelines to meet global standards.',
    },
    {
        icon: <TbLeaf size={32} className="text-[#BD001A]" />,
        title: 'GMO-Free Grain',
        desc: "We source only non-GMO grains for our birds and use heart-healthy, high-smoke-point oils for frying. Transparency isn't a buzzword; it's our recipe.",
    },
]

function QualityStandards() {
    return (
        <section className="bg-[#F5F5F5] py-12 md:py-20">
            <div className="max-w-[1240px] mx-auto px-5 md:px-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {standards.map((item, i) => (
                        <div key={i} className="bg-[#F3F3F3] w-full p-7 md:p-10 flex flex-col gap-4 relative border border-black/10 pb-8">
                            <div>{item.icon}</div>
                            <h3 className="font-['Montserrat'] font-bold text-[20px] md:text-[22px] text-[#1A1C1C]">
                                {item.title}
                            </h3>
                            <p className="font-['Hanken_Grotesk'] text-[15px] leading-[1.7] text-[#5D5F5F]">
                                {item.desc}
                            </p>
                            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#BD001A]" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default QualityStandards
