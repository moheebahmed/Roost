import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        setVisible(window.scrollY > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisible);
        return () => window.removeEventListener("scroll", toggleVisible);
    }, []);

    return (
        visible && (
            <button
                onClick={scrollToTop}
                className="
                fixed bottom-6 right-6
                bg-[#BD001A] text-white
                w-14 h-14
                rounded-full
                flex items-center justify-center
                shadow-lg
                hover:bg-[#1A1C1C]
                transition-all duration-300
                cursor-pointer
                text-xl
                ">
                <FaArrowUp />
            </button>
        )
    );
};

export default BackToTop; 