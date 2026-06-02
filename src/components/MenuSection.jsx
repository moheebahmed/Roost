import { useState } from 'react'
import { useCart } from '../context/CartContext'
import bucket1 from '../assets/images/11.png'
import bucket2 from '../assets/images/12.png'
import bucket3 from '../assets/images/13.png'
import burger1 from '../assets/images/1-bur.png'
import burger2 from '../assets/images/2-bur.png'
import side1 from '../assets/images/1-item.png'
import side2 from '../assets/images/2-item.png'
import side3 from '../assets/images/3-item.png'
import side4 from '../assets/images/4-item.png'

// ─── Data ─────────────────────────── 

const menuData = {
    BUCKETS: [
        {
            id: 1,
            tag: 'BEST SELLER',
            image: bucket1,
            name: 'THE MEGA BUCKET',
            price: '$34.99',
            desc: '12 pieces of our secret recipe pressure fried chicken. Served with three large sides and four biscuits.',
        },
        {
            id: 2,
            image: bucket2,
            name: 'FIRESTARTER BOX',
            price: '$18.50',
            desc: '6 pieces of our Nashville-inspired hot chicken. Choose your heat level from "Warm" to "Blanco".',
        },
        {
            id: 3,
            image: bucket3,
            name: 'TENDER TRIO PACK',
            price: '$22.00',
            desc: '9 hand-breaded white meat tenders. Includes three signature dipping sauces of your choice.',
        },
    ],
    BURGERS: [
        {
            id: 1,
            tag: 'SPICY',
            image: burger1,
            name: 'GHOST PEPPER BURGER',
            price: '$14.50',
            desc: 'Infused with the heat of the world\'s hottest pepper. Double breaded for extra crunch.',
        },
        {
            id: 2,
            tag: 'CLASSIC',
            image: burger2,
            name: 'THE ROOST ORIGINAL',
            price: '$12.00',
            desc: 'The sandwich that started it all. Simple, perfect, and unapologetically crunchy.',
        },
        {
            id: 3,
            tag: 'NEW',
            image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'SMOKY BBQ STACK',
            price: '$13.50',
            desc: 'Slow-smoked chicken breast, crispy onions, BBQ drizzle, and house pickles on a toasted brioche bun.',
        },
    ],
    SIDES: [
        {
            id: 1,
            image: side1,
            name: 'SKINNY FRIES',
            price: '$4.50',
            desc: 'Golden crispy thin-cut fries seasoned with our signature spice blend.',
        },
        {
            id: 2,
            image: side2,
            name: 'ZESTY SLAW',
            price: '$3.99',
            desc: 'Fresh cabbage slaw tossed in a tangy citrus dressing.',
        },
        {
            id: 3,
            image: side3,
            name: 'BUTTER BISCUITS',
            price: '$2.50',
            desc: 'Warm, flaky house-made biscuits with a hint of butter.',
        },
        {
            id: 4,
            image: side4,
            name: 'GRAVY MASH',
            price: '$5.00',
            desc: 'Creamy mashed potatoes topped with rich roast chicken gravy.',
        },
    ],
    DRINKS: [
        {
            id: 1,
            image: 'https://images.pexels.com/photos/2789328/pexels-photo-2789328.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'CLASSIC LEMONADE',
            price: '$3.50',
            desc: 'Freshly squeezed lemonade with a hint of mint. Served over ice.',
        },
        {
            id: 2,
            image: 'https://images.pexels.com/photos/3625372/pexels-photo-3625372.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'ROOST ICED TEA',
            price: '$3.00',
            desc: 'House-brewed sweet tea with lemon. Tall, cold, and refreshing.',
        },
        {
            id: 3,
            image: 'https://images.pexels.com/photos/1234535/pexels-photo-1234535.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'SPICY MANGO SLUSH',
            price: '$4.50',
            desc: 'Chilled mango slush with a spicy tajin rim. Bold and tropical.',
        },
        {
            id: 4,
            image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'cold brew',
            price: '$4.00',
            desc: 'Smooth, rich cold brew coffee served over ice with cream.',
        },
    ],
    DESSERTS: [
        {
            id: 1,
            image: 'https://images.pexels.com/photos/2373520/pexels-photo-2373520.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'honey waffle',
            price: '$5.50',
            desc: 'Crispy golden waffle drizzled with honey butter and powdered sugar.',
        },
        {
            id: 2,
            image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'choco lava cake',
            price: '$6.00',
            desc: 'Warm chocolate cake with a gooey molten centre. Served with vanilla cream.',
        },
        {
            id: 3,
            image: 'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'banana pudding',
            price: '$4.50',
            desc: 'Creamy southern-style banana pudding layered with vanilla wafers.',
        },
    ],
}

const tabConfig = {
    BUCKETS: { title: 'the bucket list', subtitle: 'SIGNATURE ROASTS', layout: 'grid3' },
    BURGERS: { title: 'the sandwiches', subtitle: 'HAND HELD HEAT', layout: 'grid3' },
    SIDES: { title: 'the sides', subtitle: 'ESSENTIAL PARTNERS', layout: 'grid4' },
    DRINKS: { title: 'the drinks', subtitle: 'STAY REFRESHED', layout: 'grid4' },
    DESSERTS: { title: 'the desserts', subtitle: 'SWEET FINISHES', layout: 'grid3' },
}

const tabs = ['BUCKETS', 'BURGERS', 'SIDES', 'DRINKS', 'DESSERTS']

// ─── Section Header ───────────── 

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

// ─── Standard Card (Buckets, Burgers, Desserts) ──────────────── 

function StandardCard({ item, category, onAdd }) {
    return (
        <div className="bg-white flex flex-col border border-[#EBEBEB]">
            <div className="relative">
                {item.tag && (
                    <span className="absolute top-3 left-3 z-10 bg-[#BD001A] text-white font-['Hanken_Grotesk'] font-bold text-[12px] tracking-[0.7px] uppercase px-3 py-1.5">
                        {item.tag}
                    </span>
                )}
                <img
                    src={item.image}
                    // alt={item.name}
                    className="w-full h-[260px] object-cover"
                />
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

// ─── Small Card (Sides, Drinks) ───────────────────  

function SmallCard({ item, category, onAdd }) {
    return (
        <div className="bg-[#F5F5F5] flex flex-col items-center p-4 gap-3">
            <img
                src={item.image}
                // alt={item.name}
                className="w-24 h-24 object-cover rounded-full"
            />
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

// ─── Main Component ─────────────── 

function MenuSection() {
    const [activeTab, setActiveTab] = useState('BUCKETS')
    const { addToCart } = useCart()

    const items = menuData[activeTab]
    const config = tabConfig[activeTab]
    const isSmall = config.layout === 'grid4'

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

                {/* Cards */}
                {isSmall ? (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
                        {items.map((item) => (
                            <SmallCard key={item.id} item={item} category={activeTab} onAdd={addToCart} />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-14">
                        {items.map((item) => (
                            <StandardCard key={item.id} item={item} category={activeTab} onAdd={addToCart} />
                        ))}
                    </div>
                )}

            </div>
        </section>
    )
}

export default MenuSection
