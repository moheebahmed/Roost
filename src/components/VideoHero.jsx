// Replaces both QualityHero and LocationsHero — same markup, different content
function VideoHero({ src, badge, title, subtitle }) {
  return (
    <section className="relative w-full h-[480px] md:h-[560px] overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={src}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-10 max-w-[1240px] mx-auto">
        <span className="inline-block bg-[#BD001A] text-white font-['Hanken_Grotesk'] font-bold text-[14px] tracking-[0.7px] uppercase px-2 py-1 mb-3 w-fit">
          {badge}
        </span>
        <h1 className="font-['Montserrat'] font-black text-white text-[42px] md:text-[64px] leading-tight tracking-[-1.28px] mb-5">
          {title}
        </h1>
        <p className="font-['Hanken_Grotesk'] text-[15px] md:text-[18px] text-[#E2E2E2] leading-[1.6] max-w-[90%] md:max-w-[49%]">
          {subtitle}
        </p>
      </div>
    </section>
  )
}

export default VideoHero
