import { useState, useEffect, useCallback } from 'react'
import { FiMapPin, FiPhone, FiClock, FiSearch, FiNavigation } from 'react-icons/fi'
import { fetchLocations } from '../api'

const tagColors = {
  'Dine-In': 'bg-red-50 text-[#BD001A] border border-red-200',
  'Takeaway': 'bg-gray-100 text-[#5D5F5F] border border-gray-200',
  'Delivery': 'bg-green-50 text-green-700 border border-green-200',
  'Drive-Thru': 'bg-orange-50 text-orange-700 border border-orange-200',
}

function LocationCard({ loc }) {
  const tags = Array.isArray(loc.tags) ? loc.tags : []
  return (
    <div className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
      <div className="h-1 w-full bg-[#E61E2A]" />
      <div className="p-6 flex flex-col gap-4 flex-1">
        <h3 className="font-['Montserrat'] font-black text-[#1A1C1C] text-[18px] leading-tight">
          {loc.name}
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`font-['Hanken_Grotesk'] text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 ${tagColors[tag] || 'bg-gray-100 text-[#5D5F5F] border border-gray-200'}`}
            >
              {tag}
            </span>
          ))}
        </div>
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
        <div className="flex-1" />
        <a
          href={loc.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex items-center justify-center gap-2 font-['Montserrat'] font-bold text-[12px] tracking-widest uppercase bg-[#E61E2A] text-white px-5 py-3 hover:bg-red-700 transition-colors"
        >
          <FiNavigation size={14} />
          get directions
        </a>
      </div>
    </div>
  )
}

function SkeletonCard() {
  return (
    <div className="bg-white border border-gray-200 flex flex-col animate-pulse">
      <div className="h-1 w-full bg-gray-200" />
      <div className="p-6 flex flex-col gap-4">
        <div className="h-5 w-3/4 bg-gray-300 rounded" />
        <div className="flex gap-2">
          <div className="h-6 w-16 bg-gray-200 rounded" />
          <div className="h-6 w-16 bg-gray-200 rounded" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="h-3 w-full bg-gray-200 rounded" />
          <div className="h-3 w-2/3 bg-gray-200 rounded" />
          <div className="h-3 w-1/2 bg-gray-200 rounded" />
        </div>
        <div className="h-10 w-full bg-gray-300 rounded mt-2" />
      </div>
    </div>
  )
}

function LocationsSection() {
  const [query, setQuery] = useState('')
  const [locations, setLocations] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const loadLocations = useCallback((search = '') => {
    setLoading(true)
    setError(null)
    fetchLocations(search)
      .then((data) => {
        setLocations(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  // Initial load
  useEffect(() => {
    loadLocations()
  }, [loadLocations])

  // Search with debounce
  useEffect(() => {
    const timer = setTimeout(() => loadLocations(query), 400)
    return () => clearTimeout(timer)
  }, [query, loadLocations])

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

        {/* Error */}
        {error && (
          <div className="text-center py-16 text-[#BD001A] font-['Hanken_Grotesk'] text-[14px]">
            Failed to load locations. Please make sure the server is running.
          </div>
        )}

        {/* Cards Grid */}
        {!error && loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : !error && locations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <LocationCard key={loc.id} loc={loc} />
            ))}
          </div>
        ) : !error ? (
          <div className="text-center py-20">
            <FiMapPin size={40} className="text-gray-300 mx-auto mb-4" />
            <p className="font-['Hanken_Grotesk'] text-[16px] text-[#9A9C9C]">
              No locations found for "{query}". Try another area.
            </p>
          </div>
        ) : null}

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
              notify me
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default LocationsSection
