"use client";

import { useTheme } from "@/src/context/ThemeContext";
import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";
import Image from "next/image";
import { header } from "framer-motion/client";

const Header = () => {
  const { isDark, setIsDark } = useTheme();

  return (
    <header className="container mx-auto">
      <div
        className={` fixed z-50 flex top-0 left-0 justify-between items-center transition-colors px-8 ${isDark ? "bg-baby" : "bg-darkblue"} w-full min-h-20 transition-colors duration-1000 ease-in-out`}
      >
        <div
          className={`-ml-1.5 py-2 flex justify-center items-center text-white gap-4`}
        >
          <Image
            src="/Self_logo.png"
            height={60}
            width={60}
            alt="Logo"
            className="rounded-full shadow text-royal"
          />
          <div
            className={` font-bold ${isDark ? "text-darkblue" : "text-white"}`}
          >
            MUHAMMAD ABDULLAH
          </div>
        </div>

        <div className="flex items-center gap-2">
          <IoSunnySharp className={isDark ? "text-darkblue" : "text-white"} />
          <button
            onClick={() => setIsDark(!isDark)}
            className={`relative cursor-pointer w-14 h-7 rounded-full transition-colors duration-300
          ${isDark ? "bg-darkblue" : "bg-white"}
          `}
          >
            <span
              className={`absolute top-1 left-1 w-5 h-5 rounded-full
              transition-transform duration-300
              ${isDark ? "translate-x-7 bg-white" : "translate-x-0 bg-darkblue"}
          `}
            />
          </button>
          <IoMoonSharp className={isDark ? "text-darkblue" : "text-white"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
