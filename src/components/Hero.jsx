import { useEffect, useState } from 'react'
import bannerImg from '../assets/images/banner-bg.png'
import pickupIcon from '../assets/images/Icon.png'
import { SiUbereats, SiDoordash } from 'react-icons/si'
import { TbToolsKitchen2 } from 'react-icons/tb'

const phrases = ['CRAVE THE CRUNCH']

function TypingLoop() {
    const [phraseIndex, setPhraseIndex] = useState(0)
    const [displayed, setDisplayed] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const current = phrases[phraseIndex]
        let timer
        if (!isDeleting && displayed.length < current.length) {
            timer = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
        } else if (!isDeleting && displayed.length === current.length) {
            timer = setTimeout(() => setIsDeleting(true), 1500)
        } else if (isDeleting && displayed.length > 0) {
            timer = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40)
        } else if (isDeleting && displayed.length === 0) {
            setIsDeleting(false)
            setPhraseIndex((prev) => (prev + 1) % phrases.length)
        }
        return () => clearTimeout(timer)
    }, [displayed, isDeleting, phraseIndex])

    const words = displayed.split(' ')
    const lastWord = words[words.length - 1]
    const firstPart = words.slice(0, words.length - 1).join(' ')

    return (
        <h1 className="font-['Montserrat'] font-black text-[32px] md:text-[64px] leading-tight uppercase text-[#1A1C1C] mb-[22px] min-h-[80px] md:min-h-[150px]">
            {firstPart && <span>{firstPart} </span>}
            <span className="text-[#BD001A]">{lastWord}</span>
            <span className="animate-pulse text-[#1A1C1C]">|</span>
        </h1>
    )
}

function Hero() {
    return (
        <section className="bg-gray-100">
            <div className="max-w-[1240px] mx-auto px-5 md:px-10">
                <div className="flex flex-col md:flex-row items-center justify-between py-10 md:py-16 gap-8 md:gap-10">

                    {/* Left Content */}
                    <div className="flex-1 w-full md:max-w-md text-center md:text-left">
                        <TypingLoop />
                        <p className="font-['Hanken_Grotesk'] text-[16px] md:text-[18px] leading-[1.6] text-[#5D5F5F] mb-[22px]">
                            Our chicken is hand-breaded daily using a top-secret blend of 12 premium spices. Farm-fresh ingredients, high-velocity heat, and zero compromises.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                            <a href="#" className="font-['Hanken_Grotesk'] font-bold text-[14px] leading-[14px] tracking-[0.7px] uppercase bg-[#E61E2A] text-white px-[28px] py-[18px] flex items-center gap-2 hover:bg-red-700 transition-colors w-full sm:w-auto justify-center">
                                order for pickup
                                <img src={pickupIcon} className="w-5 h-5 object-contain" />
                            </a>
                            <a href="#" className="font-['Hanken_Grotesk'] font-bold text-[14px] leading-[14px] tracking-[0.7px] uppercase bg-[#2F3131] text-white px-[28px] py-[20px] transition-colors hover:bg-[#BD001A] w-full sm:w-auto justify-center flex">
                                FIND A ROOST
                            </a>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 flex justify-center md:justify-end w-full">
                        <img src={bannerImg} className="w-full max-w-sm md:max-w-full object-contain" />
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[#E8E8E8]">
                <div className="max-w-[1240px] mx-auto px-5 md:px-10 flex flex-col sm:flex-row items-center justify-between py-4 md:h-20 gap-3">
                    <div className="flex items-center gap-1.5">
                        <span className="text-[#BD001A] text-[24px]">★</span>
                        <span className="font-['Hanken_Grotesk'] font-bold text-[14px] text-[#BD001A]">4.9/5 STARS</span>
                        <span className="font-['Hanken_Grotesk'] font-medium text-[12px] text-[#5D5F5F]">FROM 10K+ FANS</span>
                    </div>
                    <div className="flex items-center gap-5 md:gap-8">
                        <span className="font-['Hanken_Grotesk'] font-bold text-[13px] uppercase text-[#6C6E6E] flex items-center gap-1"><SiUbereats size={18} /> UBEREATS</span>
                        <span className="font-['Hanken_Grotesk'] font-bold text-[13px] uppercase text-[#6C6E6E] flex items-center gap-1"><SiDoordash size={18} /> DOORDASH</span>
                        <span className="font-['Hanken_Grotesk'] font-bold text-[13px] uppercase text-[#6C6E6E] flex items-center gap-1"><TbToolsKitchen2 size={18} /> GRUBHUB</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
