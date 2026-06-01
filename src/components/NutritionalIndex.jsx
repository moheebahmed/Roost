import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

const menuItems = [
    { name: 'The Signature Roost', cals: 640, fat: 32, carbs: 48, protein: 42, allergens: 'WHEAT, EGG, MILK', highlight: false },
    { name: 'Velocity Wings (6pc)', cals: 410, fat: 28, carbs: 12, protein: 26, allergens: 'SOY', highlight: false },
    { name: 'High-Protein Bowl', cals: 520, fat: 18, carbs: 34, protein: 54, allergens: 'GF FRIENDLY', highlight: true },
    { name: 'Co. Slaw (Small)', cals: 140, fat: 11, carbs: 9, protein: 1, allergens: 'EGG', highlight: false },
    { name: 'Spicy Tender Basket (3pc)', cals: 480, fat: 24, carbs: 31, protein: 35, allergens: 'WHEAT, MILK', highlight: false },
]

function NutritionalIndex() {
    const [search, setSearch] = useState('')

    const filtered = menuItems.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <section className="bg-[#E2E2E2] py-16 md:py-20">
            <div className="max-w-[1240px] mx-auto px-5 md:px-10">

                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                    <div>
                        <h2 className="font-['Montserrat'] font-bold text-[28px] md:text-[32px] leading-tight text-[#1A1C1C] mb-2">
                            Nutritional Index
                        </h2>
                        <p className="font-['Hanken_Grotesk'] font-normal text-[15px] md:text-[16px] leading-[1.6] text-[#5D5F5F] max-w-full md:max-w-[73%]">
                            Filter our menu items by calories, protein, or dietary requirements. We provide
                            full transparency on every macro.
                        </p>
                    </div>

                    {/* Search */}
                    <div className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-3 w-full md:w-[260px] shrink-0">
                        <FiSearch size={16} className="text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search menu items..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="font-['Hanken_Grotesk'] text-[14px] text-[#1A1C1C] placeholder-gray-400 outline-none w-full bg-transparent"
                        />
                    </div>
                </div>

                {/* Table — scrollable on mobile, full on desktop */}
                <div className="overflow-x-auto -mx-5 md:mx-0">
                    <div className="min-w-[600px] md:min-w-0 px-5 md:px-0">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-[#1A1C1C]">
                                    {['ITEM', 'CALS', 'FAT (G)', 'CARBS (G)', 'PROTEIN (G)', 'ALLERGENS'].map((col) => (
                                        <th key={col} className="font-['Hanken_Grotesk'] font-bold text-[12px] md:text-[13px] tracking-[0.7px] uppercase text-white text-left px-4 md:px-6 py-4 whitespace-nowrap">
                                            {col}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((item, i) => (
                                    <tr key={i} className="border-b border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                                        <td className="font-['Hanken_Grotesk'] font-bold text-[13px] md:text-[14px] text-[#1A1C1C] px-4 md:px-6 py-4 whitespace-nowrap">{item.name}</td>
                                        <td className="font-['Hanken_Grotesk'] text-[14px] md:text-[15px] text-[#1A1C1C] px-4 md:px-6 py-4">{item.cals}</td>
                                        <td className="font-['Hanken_Grotesk'] text-[14px] md:text-[15px] text-[#1A1C1C] px-4 md:px-6 py-4">{item.fat}</td>
                                        <td className="font-['Hanken_Grotesk'] text-[14px] md:text-[15px] text-[#1A1C1C] px-4 md:px-6 py-4">{item.carbs}</td>
                                        <td className="font-['Hanken_Grotesk'] text-[14px] md:text-[15px] text-[#1A1C1C] px-4 md:px-6 py-4">{item.protein}</td>
                                        <td className="px-4 md:px-6 py-4">
                                            {item.highlight ? (
                                                <span className="font-['Hanken_Grotesk'] font-bold text-[10px] md:text-[11px] uppercase bg-[#BD001A] text-white px-2 py-1 whitespace-nowrap">{item.allergens}</span>
                                            ) : (
                                                <span className="font-['Hanken_Grotesk'] text-[11px] md:text-[13px] uppercase bg-[#EEEEEE] text-[#1A1C1C] px-2 py-1 whitespace-nowrap">{item.allergens}</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                                {filtered.length === 0 && (
                                    <tr>
                                        <td colSpan={6} className="font-['Hanken_Grotesk'] text-[14px] text-gray-400 text-center px-6 py-10">No items found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default NutritionalIndex
