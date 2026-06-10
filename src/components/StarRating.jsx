import { useState } from 'react'
import { FiStar } from 'react-icons/fi'

function StarRating() {
    const [rating, setRating] = useState(0)
    const [hovered, setHovered] = useState(0)
    const [submitted, setSubmitted] = useState(false)

    if (submitted) {
        return (
            <div className="flex flex-col items-center gap-2">
                <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                        <FiStar
                            key={s}
                            size={28}
                            className={s <= rating ? 'text-[#F9A825]' : 'text-[#E0E0E0]'}
                            fill={s <= rating ? '#F9A825' : 'none'}
                        />
                    ))}
                </div>
                <p className="font-['Hanken_Grotesk'] font-bold text-[13px] text-[#2E7D32] mt-1">
                    Thanks for your feedback!
                </p>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((s) => (
                    <button
                        key={s}
                        onClick={() => setRating(s)}
                        onMouseEnter={() => setHovered(s)}
                        onMouseLeave={() => setHovered(0)}
                        className="cursor-pointer transition-transform hover:scale-110"
                    >
                        <FiStar
                            size={32}
                            className={`transition-colors ${s <= (hovered || rating) ? 'text-[#F9A825]' : 'text-[#E0E0E0]'
                                }`}
                            fill={s <= (hovered || rating) ? '#F9A825' : 'none'}
                        />
                    </button>
                ))}
            </div>
            {rating > 0 && (
                <button
                    onClick={() => setSubmitted(true)}
                    className="bg-[#1A1C1C] text-white font-['Hanken_Grotesk'] font-bold text-[11px] tracking-widest uppercase px-6 py-2.5 hover:bg-[#BD001A] transition-colors cursor-pointer"
                >
                    submit rating
                </button>
            )}
        </div>
    )
}

export default StarRating
