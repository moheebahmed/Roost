import broastVideo from '../assets/images/chicken broast.mp4'

function MenuHero() {
    return (
        <section className="bg-[#F2F2F2] py-16 md:py-24">
            <div className="max-w-[1240px] mx-auto px-5 md:px-10">
                <div className="flex flex-col md:flex-row items-stretch min-h-[340px]">

                    {/* Left - Text */}
                    <div className="flex-1 flex flex-col justify-center py-12 md:py-16 pr-0 md:pr-12">
                        <h1 className="font-['Montserrat'] font-black text-[36px] md:text-[56px] leading-tight uppercase text-[#1A1C1C] mb-4">
                            HIGH-VELOCITY <br />
                            <span className="text-[#BD001A]">FLAVOR.</span>
                        </h1>
                        <p className="font-['Hanken_Grotesk'] text-[15px] md:text-[17px] leading-[1.7] text-[#5D5F5F] max-w-[80%]">
                            The premium standard in ultra-crisp chicken. Engineered for crunch, seasoned for soul.
                        </p>
                    </div>

                    {/* Right - Video */}
                    <div className="flex-1 flex items-stretch overflow-hidden">
                        <video
                            src={broastVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover min-h-[260px] md:min-h-[340px]"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default MenuHero
