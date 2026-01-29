"use client"

import { useTheme } from "@/src/context/ThemeContext";

const Footer = () => {
  const { isDark, setIsDark } = useTheme();

  return (
    <footer
      id="contact"
      className={`flex top-0 left-0 justify-between items-center transition-colors px-8 border-t-2  ${isDark ? "bg-navy border-baby" : "bg-baby border-navy"} w-full min-h-80`}
    >
      
    </footer>
  );
};

export default Footer;
