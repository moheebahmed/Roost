import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const reviews = [
    {
        name: '— MARCO G., FOOD CRITIC',
        text: '"Every bite feels perfectly crafted. The crunch is next level and the flavor is always consistent. Easily one of the best fried chicken."',
    },
    {
        name: '— SARAH L., LOCAL FAN',
        text: '"Honestly the best chicken sandwich I\'ve tried in a long time. Juicy, crispy, and full of flavor. The spicy mayo takes it to another level."',
    },
    {
        name: '— DAVID K., TECH FOUNDER',
        text: '"From packaging to taste, everything feels premium. The food arrives hot, fresh, and consistently amazing every single time."',
    },
]

function Testimonials() {
    return (
        <section className="bg-white py-12 md:py-16">
            <div className="max-w-[1240px] mx-auto px-5 md:px-10">

                <h2 className="font-['Montserrat'] font-bold text-[20px] md:text-[32px] uppercase text-gray-900 text-center mb-8 md:mb-10">
                    the word on the street
                </h2>

                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 16 },
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 24 },
                    }}
                    className="pb-4"
                >
                    {reviews.map((review, i) => (
                        <SwiperSlide key={i}>
                            <div className="border border-[#E2E2E2] bg-[#F9F9F9] p-6 md:p-8 flex flex-col gap-4 min-h-[260px] md:min-h-[300px]">
                                <div className="flex gap-1 justify-center">
                                    {[...Array(5)].map((_, s) => (
                                        <span key={s} className="text-[#BD001A] text-[22px]">★</span>
                                    ))}
                                </div>
                                <p className="font-['Hanken_Grotesk'] italic text-[15px] md:text-[17px] leading-[1.7] text-[#1A1C1C] text-center flex-1">
                                    {review.text}
                                </p>
                                <p className="font-['Hanken_Grotesk'] font-bold text-[12px] tracking-[0.7px] text-center uppercase text-[#5D5F5F]">
                                    {review.name}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    )
}

export default Testimonials
