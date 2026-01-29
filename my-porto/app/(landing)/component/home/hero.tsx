"use client"

import { useTheme } from "@/src/context/ThemeContext";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const Hero = () => {
  const { isDark, setIsDark } = useTheme();
  const textRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      setWidth(textRef.current.scrollWidth);
    }
  }, []);

  const texts = Array(20).fill(
    "Data Science Student — AI Engineer Enthusiast —",
  );

  return (
    <section
      id="home"
      className={`${isDark ? "bg-navy" : "bg-baby"} mt-1 rounded-3xl scroll-mt-25 transition-colors`}
    >
      <div className="flex justify-center items-center gap-10 h-137 p-8">
        <Image src="/prototypeProfil.png" width={364} height={364} alt="Profil" className=""/>
        <div className={`${isDark ? "text-baby" : "text-navy"}`}>
          <div className="font-extrabold text-[94px] leading-28">
            MUHAMMAD ABDULLAH
          </div>
          <div className="w-130 overflow-hidden ">
            <motion.div
              ref={textRef}
              className="font-bold italic opacity-70 text-[50px] whitespace-nowrap will-change-transform flex"
              animate={{ x: [520, -width] }}
              transition={{
                repeat: Infinity,
                duration: 250,
                ease: "linear",
              }}
            >
              {texts.map((text, index) => (
                <span key={index} className="mr-4">
                  {text}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
