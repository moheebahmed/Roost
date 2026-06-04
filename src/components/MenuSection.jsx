import { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'
import { fetchMenuByCategory } from '../api'

const tabConfig = {
    BUCKETS: { title: 'the bucket list', subtitle: 'SIGNATURE ROASTS', layout: 'grid3', key: 'buckets' },
    BURGERS: { title: 'the sandwiches', subtitle: 'HAND HELD HEAT', layout: 'grid3', key: 'burgers' },
    SIDES: { title: 'the sides', subtitle: 'ESSENTIAL PARTNERS', layout: 'grid4', key: 'sides' },
    DRINKS: { title: 'the drinks', subtitle: 'STAY REFRESHED', layout: 'grid4', key: 'drinks' },
    DESSERTS: { title: 'the desserts', subtitle: 'SWEET FINISHES', layout: 'grid3', key: 'desserts' },
}

const tabs = ['BUCKETS', 'BURGERS', 'SIDES', 'DRINKS', 'DESSERTS']

// ─── Section Header ───────────────────────────────────────

function SectionHeader({ title, subtitle }) {
    return (
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
                <div className="w-[4px] h-6 bg-[#BD001A]" />
                <h2 className="font-['Montserrat'] font-bold text-[32px] leading-[38.4px] tracking-[-0.8px] uppercase text-[#1A1C1C]">
                    {title}
                </h2>
            </div>
            {subtitle && (
                <span className="font-['Hanken_Grotesk'] font-bold text-[14px] leading-[14px] tracking-[0.7px] uppercase text-[#5D5F5F] hidden md:block">
                    {subtitle}
                </span>
            )}
        </div>
    )
}

// ─── Standard Card (Buckets, Burgers, Desserts) ───────────

function StandardCard({ item, category, onAdd }) {
    return (
        <div className="bg-white flex flex-col border border-[#EBEBEB]">
            <div className="relative">
                {item.tag && (
                    <span className="absolute top-3 left-3 z-10 bg-[#BD001A] text-white font-['Hanken_Grotesk'] font-bold text-[12px] tracking-[0.7px] uppercase px-3 py-1.5">
                        {item.tag}
                    </span>
                )}
                <img src={item.image} className="w-full h-[260px] object-cover" />
            </div>
            <div className="p-4 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-['Montserrat'] font-bold text-[20px] uppercase text-[#1A1C1C] leading-tight">
                        {item.name}
                    </h3>
                    <span className="font-['Montserrat'] font-bold text-[20px] text-[#BD001A] shrink-0">
                        {item.price}
                    </span>
                </div>
                <p className="font-['Hanken_Grotesk'] text-[14px] leading-[1.6] text-[#5D5F5F] mb-5 flex-1">
                    {item.desc}
                </p>
                <button
                    onClick={() => onAdd({ ...item, category })}
                    className="w-full bg-[#1A1C1C] text-white font-['Hanken_Grotesk'] font-bold text-[12px] tracking-[1px] uppercase py-4 hover:bg-[#BD001A] transition-colors cursor-pointer"
                >
                    add to order
                </button>
            </div>
        </div>
    )
}

// ─── Small Card (Sides, Drinks) ───────────────────────────

function SmallCard({ item, category, onAdd }) {
    return (
        <div className="bg-[#F5F5F5] flex flex-col items-center p-4 gap-3">
            <img src={item.image} className="w-24 h-24 object-cover rounded-full" />
            <h4 className="font-['Hanken_Grotesk'] font-bold text-[13px] tracking-[0.7px] uppercase text-[#1A1C1C] text-center">
                {item.name}
            </h4>
            <span className="font-['Montserrat'] font-bold text-[15px] text-[#BD001A]">
                {item.price}
            </span>
            <button
                onClick={() => onAdd({ ...item, category })}
                className="w-full bg-[#1A1C1C] text-white font-['Hanken_Grotesk'] font-bold text-[11px] tracking-[1px] uppercase py-3 hover:bg-[#BD001A] transition-colors cursor-pointer"
            >
                ADD TO ORDER
            </button>
        </div>
    )
}

// ─── Skeleton Loader ──────────────────────────────────────

function SkeletonCard({ small }) {
    if (small) {
        return (
            <div className="bg-[#F5F5F5] flex flex-col items-center p-4 gap-3 animate-pulse">
                <div className="w-24 h-24 rounded-full bg-gray-300" />
                <div className="h-3 w-24 bg-gray-300 rounded" />
                <div className="h-3 w-12 bg-gray-200 rounded" />
                <div className="h-9 w-full bg-gray-300 rounded" />
            </div>
        )
    }
    return (
        <div className="bg-white border border-[#EBEBEB] flex flex-col animate-pulse">
            <div className="w-full h-[260px] bg-gray-200" />
            <div className="p-4 flex flex-col gap-3">
                <div className="h-5 w-3/4 bg-gray-300 rounded" />
                <div className="h-3 w-full bg-gray-200 rounded" />
                <div className="h-3 w-5/6 bg-gray-200 rounded" />
                <div className="h-12 w-full bg-gray-300 rounded mt-2" />
            </div>
        </div>
    )
}

// ─── Main Component ───────────────────────── 

function MenuSection() {
    const [activeTab, setActiveTab] = useState('BUCKETS')
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const { addToCart } = useCart()

    const config = tabConfig[activeTab]
    const isSmall = config.layout === 'grid4'

    useEffect(() => {
        setLoading(true)
        setError(null)
        fetchMenuByCategory(config.key)
            .then((data) => {
                setItems(data)
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false)
            })
    }, [activeTab, config.key])

    return (
        <section id="menu-section" className="bg-white pt-[16px]">
            <div className="max-w-[1240px] mx-auto px-5 md:px-10">

                {/* Tabs */}
                <div className="flex items-center gap-6 md:gap-10 mb-10 overflow-x-auto border-b border-[#E2E2E2]">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`font-['Hanken_Grotesk'] font-bold text-[14px] leading-[14px] tracking-[0.7px] uppercase pb-3 shrink-0 transition-colors border-b-2 -mb-[2px] cursor-pointer ${activeTab === tab
                                    ? 'text-[#BD001A] border-[#BD001A]'
                                    : 'text-[#9A9C9C] border-transparent hover:text-[#1A1C1C]'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Section Header */}
                <SectionHeader title={config.title} subtitle={config.subtitle} />

                {/* Error state */}
                {error && (
                    <div className="text-center py-16 text-[#BD001A] font-['Hanken_Grotesk'] text-[14px]">
                        Failed to load menu items. Please make sure the server is running.
                    </div>
                )}

                {/* Cards */}
                {!error && isSmall ? (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
                        {loading
                            ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} small />)
                            : items.map((item) => (
                                <SmallCard key={item.id} item={item} category={activeTab} onAdd={addToCart} />
                            ))
                        }
                    </div>
                ) : !error ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-14">
                        {loading
                            ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
                            : items.map((item) => (
                                <StandardCard key={item.id} item={item} category={activeTab} onAdd={addToCart} />
                            ))
                        }
                    </div>
                ) : null}

            </div>
        </section>
    )
}

export default MenuSection
