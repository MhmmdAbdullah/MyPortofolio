"use client"

import { useTheme } from "@/src/context/ThemeContext";
import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";
import Image from "next/image";

const Header = () => {
  const { isDark, setIsDark } = useTheme();

  return (
    <header
      className={`fixed flex top-0 left-0 justify-between items-center transition-colors px-8 border-b-2 ${isDark ? "bg-navy border-baby" : "bg-baby border-navy "} w-full min-h-20`}
    >
      <div
        className={`-ml-1.5 py-2 flex justify-center items-center text-baby gap-4`}
      >
        <Image src="/Self_logo.png"
          height={60}
          width={60}
          alt="Logo"
          className="rounded-full shadow shadow-navy"
          
        />
        <div
          className={` font-bold ${isDark ? "text-baby" : "text-navy"}`}
        >
          MUHAMMAD ABDULLAH
        </div>
      </div>

      <div className="flex items-center gap-2">
        <IoSunnySharp className={isDark ? "text-baby" : "text-navy"} />
        <button
          onClick={() => setIsDark(!isDark)}
          className={`relative cursor-pointer w-14 h-7 rounded-full transition-colors duration-300
          ${isDark ? "bg-baby" : "bg-navy"}
          `}
        >
          <span
            className={`absolute top-1 left-1 w-5 h-5 rounded-full
              transition-transform duration-300
              ${isDark ? "translate-x-7 bg-navy" : "translate-x-0 bg-baby"}
          `}
          />
        </button>
        <IoMoonSharp className={isDark ? "text-baby" : "text-navy"} />
      </div>
    </header>
  );
};

export default Header;
