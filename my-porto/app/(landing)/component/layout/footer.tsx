"use client";

import { useTheme } from "@/src/context/ThemeContext";
import Image from "next/image";

const Footer = () => {
  const { isDark, setIsDark } = useTheme();

  return (
    <footer className="container mx-auto">
      <div
        className={`flex top-0 left-0 justify-between items-center transition-colors px-8  ${isDark ? "bg-darkblue " : "bg-baby"} w-full min-h-80 transition-colors duration-1000 ease-in-out`}
      >
        <div
          className={`ml-20 flex flex-col p-4 ${isDark ? "border-white text-white" : "border-darkblue text-darkblue"}`}
        >
          <div className={`flex justify-between gap-4 mb-8 `}>
            <div className="flex flex-col gap-4">
              <Image src="/Self_logo.png" height={60} width={60} alt="Logo" />
              <p className={`text-xs `}>
                “Without data engineering, AI is just a brilliant idea with
                nowhere to stand.”
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-semibold">Quick Lines</h1>
              <div className="flex flex-col gap-2 text-xs">
                <p>Home</p>
                <p>About</p>
                <p>Project</p>
                <p>Contact</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Image src="/Self_logo.png" height={60} width={60} alt="Logo" />
              <p className={`text-xs`}>
                “Without data engineering, AI is just a brilliant idea with
                nowhere to stand.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
