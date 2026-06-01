import broastVideo from '../assets/images/broast.mp4'

function QualityHero() {
    return (
        <section className="relative w-full h-[480px] md:h-[560px] overflow-hidden">

            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src={broastVideo}
                autoPlay
                muted
                loop
                playsInline
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Text Content */}
            <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 max-w-[1240px] mx-auto">

                {/* Badge */}
                <span className="inline-block bg-[#BD001A] text-white font-['Hanken_Grotesk'] font-bold text-[14px] leading-[14px] tracking-[0.7px] uppercase px-[8px] py-[4px] mb-3 w-fit">
                    Uncompromising Standards
                </span>

                {/* Heading */}
                <h1 className="font-['Montserrat'] font-black text-white text-[42px] md:text-[64px] leading-[46px] md:leading-[70.4px] tracking-[-1.28px] mb-[20px]">
                    Nutrition &amp; Quality.
                </h1>

                {/* Subtext */}
                <p className="font-['Hanken_Grotesk'] font-normal text-[15px] md:text-[18px] text-[#E2E2E2] leading-[1.6] max-w-[90%] md:max-w-[49%]">
                    We believe speed shouldn't sacrifice substance. Discover the
                    clean, high-velocity fuel behind every Roost &amp; Co. meal.
                </p>
            </div>
        </section>
    )
}

export default QualityHero
