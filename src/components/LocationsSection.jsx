import { useState } from 'react'
import { FiMapPin, FiPhone, FiClock, FiSearch, FiNavigation } from 'react-icons/fi'

const locations = [
    {
        id: 1,
        name: 'Roost & Co. — Berlin Mitte',
        address: 'Friedrichstraße 123, 10117 Berlin, Germany',
        phone: '+49 30 12345678',
        hours: 'Mon – Sun: 11:00 – 23:00',
        tags: ['Dine-In', 'Takeaway', 'Delivery'],
        mapUrl: 'https://maps.google.com/?q=Friedrichstrasse+Berlin+Mitte',
    },
    {
        id: 2,
        name: 'Roost & Co. — Munich Marienplatz',
        address: 'Kaufingerstraße 18, 80331 München, Germany',
        phone: '+49 89 98765432',
        hours: 'Mon – Sun: 11:00 – 00:00',
        tags: ['Dine-In', 'Takeaway', 'Drive-Thru'],
        mapUrl: 'https://maps.google.com/?q=Kaufingerstrasse+Munich',
    },
    {
        id: 3,
        name: 'Roost & Co. — Hamburg Altona',
        address: 'Große Bergstraße 56, 22767 Hamburg, Germany',
        phone: '+49 40 11223344',
        hours: 'Mon – Sun: 12:00 – 23:00',
        tags: ['Dine-In', 'Takeaway'],
        mapUrl: 'https://maps.google.com/?q=Grosse+Bergstrasse+Hamburg+Altona',
    },
    {
        id: 4,
        name: 'Roost & Co. — Frankfurt Zeil',
        address: 'Zeil 75, 60313 Frankfurt am Main, Germany',
        phone: '+49 69 55443322',
        hours: 'Mon – Sun: 11:00 – 23:00',
        tags: ['Dine-In', 'Takeaway', 'Delivery'],
        mapUrl: 'https://maps.google.com/?q=Zeil+Frankfurt+am+Main',
    },
    {
        id: 5,
        name: 'Roost & Co. — Cologne Hohe Straße',
        address: 'Hohe Straße 34, 50667 Köln, Germany',
        phone: '+49 221 77889900',
        hours: 'Mon – Sun: 11:00 – 00:00',
        tags: ['Dine-In', 'Takeaway', 'Drive-Thru', 'Delivery'],
        mapUrl: 'https://maps.google.com/?q=Hohe+Strasse+Cologne',
    },
    {
        id: 6,
        name: 'Roost & Co. — Stuttgart Königstraße',
        address: 'Königstraße 12, 70173 Stuttgart, Germany',
        phone: '+49 711 33445566',
        hours: 'Mon – Sun: 11:00 – 23:00',
        tags: ['Dine-In', 'Takeaway'],
        mapUrl: 'https://maps.google.com/?q=Konigstrasse+Stuttgart',
    },
]

const tagColors = {
    'Dine-In': 'bg-red-50 text-[#BD001A] border border-red-200',
    'Takeaway': 'bg-gray-100 text-[#5D5F5F] border border-gray-200',
    'Delivery': 'bg-green-50 text-green-700 border border-green-200',
    'Drive-Thru': 'bg-orange-50 text-orange-700 border border-orange-200',
}

function LocationCard({ loc }) {
    return (
        <div className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
            {/* Red top bar */}
            <div className="h-1 w-full bg-[#E61E2A]" />

            <div className="p-6 flex flex-col gap-4 flex-1">
                {/* Name */}
                <h3 className="font-['Montserrat'] font-black text-[#1A1C1C] text-[18px] leading-tight">
                    {loc.name}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {loc.tags.map((tag) => (
                        <span
                            key={tag}
                            className={`font-['Hanken_Grotesk'] text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 ${tagColors[tag]}`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Info */}
                <div className="flex flex-col gap-3 mt-1">
                    <div className="flex items-start gap-3">
                        <FiMapPin size={15} className="text-[#E61E2A] mt-0.5 shrink-0" />
                        <span className="font-['Hanken_Grotesk'] text-[14px] text-[#5D5F5F] leading-[1.6]">
                            {loc.address}
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <FiPhone size={15} className="text-[#E61E2A] shrink-0" />
                        <span className="font-['Hanken_Grotesk'] text-[14px] text-[#5D5F5F]">
                            {loc.phone}
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <FiClock size={15} className="text-[#E61E2A] shrink-0" />
                        <span className="font-['Hanken_Grotesk'] text-[14px] text-[#5D5F5F]">
                            {loc.hours}
                        </span>
                    </div>
                </div>

                {/* Spacer */}
                <div className="flex-1" />

                {/* CTA Button */}
                <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center justify-center gap-2 font-['Montserrat'] font-bold text-[12px] tracking-widest uppercase bg-[#E61E2A] text-white px-5 py-3 hover:bg-red-700 transition-colors"
                >
                    <FiNavigation size={14} />
                    GET DIRECTIONS
                </a>
            </div>
        </div>
    )
}

function LocationsSection() {
    const [query, setQuery] = useState('')

    const filtered = locations.filter(
        (loc) =>
            loc.name.toLowerCase().includes(query.toLowerCase()) ||
            loc.address.toLowerCase().includes(query.toLowerCase())
    )

    return (
        <section className="bg-[#F9F7F4] py-16 md:py-24">
            <div className="max-w-[1240px] mx-auto px-5 md:px-10">

                {/* Section Header */}
                <div className="mb-10 md:mb-14">
                    <span className="font-['Hanken_Grotesk'] font-bold text-[13px] tracking-[2px] uppercase text-[#BD001A]">
                        WHERE TO FIND US
                    </span>
                    <h2 className="font-['Montserrat'] font-black text-[#1A1C1C] text-[36px] md:text-[48px] leading-tight tracking-[-0.96px] mt-2 mb-4">
                        Every City. Every Craving.
                    </h2>
                    <p className="font-['Hanken_Grotesk'] text-[16px] text-[#5D5F5F] leading-[1.7] max-w-[520px]">
                        From Berlin to Stuttgart, we're spreading across Germany. Walk in or order ahead — a Roost is always close.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="relative mb-10 max-w-[460px]">
                    <FiSearch size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9A9C9C]" />
                    <input
                        type="text"
                        placeholder="Search by city or area..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full pl-11 pr-4 py-3.5 border border-gray-300 bg-white font-['Hanken_Grotesk'] text-[15px] text-[#1A1C1C] placeholder-[#9A9C9C] focus:outline-none focus:border-[#E61E2A] transition-colors"
                    />
                </div>

                {/* Cards Grid */}
                {filtered.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((loc) => (
                            <LocationCard key={loc.id} loc={loc} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <FiMapPin size={40} className="text-gray-300 mx-auto mb-4" />
                        <p className="font-['Hanken_Grotesk'] text-[16px] text-[#9A9C9C]">
                            No locations found for "{query}". Try another area.
                        </p>
                    </div>
                )}

                {/* Bottom CTA Banner */}
                <div className="mt-16 bg-[#1A1C1C] px-8 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="font-['Montserrat'] font-black text-white text-[24px] md:text-[30px] leading-tight mb-2">
                            Can't find one near you?
                        </h3>
                        <p className="font-['Hanken_Grotesk'] text-[15px] text-gray-400">
                            We're growing fast. Sign up to get notified when Roost opens in your city.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="px-4 py-3.5 bg-white/10 border border-gray-600 text-white placeholder-gray-500 font-['Hanken_Grotesk'] text-[14px] focus:outline-none focus:border-[#E61E2A] transition-colors min-w-[220px]"
                        />
                        <button className="font-['Montserrat'] font-bold text-[12px] tracking-widest uppercase bg-[#E61E2A] text-white px-7 py-3.5 hover:bg-red-700 transition-colors whitespace-nowrap">
                            NOTIFY ME
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default LocationsSection
