"use client";

import { useState } from "react";
import { RiHomeWifiLine } from "react-icons/ri";
import { RiInfoCardLine } from "react-icons/ri";
import { FaProjectDiagram } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import { motion, AnimatePresence, Variants } from "motion/react";
import { useTheme } from "@/src/context/ThemeContext";

type MenuID = "Home" | "About" | "Project" | "Contact";

const tooltipVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -10,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Sidebar = () => {
  const { isDark } = useTheme();
  const [activeMenu, setActiveMenu] = useState<MenuID | null>(null);

  const tooltipPosition: Record<MenuID, string> = {
    Home: "top-6",
    About: "top-31",
    Project: "top-56",
    Contact: "top-81",
  };

  const menuItems: { id: MenuID; icon: any; size: number; target: string }[] = [
    { id: "Home", icon: RiHomeWifiLine, size: 40, target: "home" },
    { id: "About", icon: RiInfoCardLine, size: 38, target: "about" },
    { id: "Project", icon: FaProjectDiagram, size: 38, target: "project" },
    {
      id: "Contact",
      icon: MdConnectWithoutContact,
      size: 38,
      target: "contact",
    },
  ];

  return (
    <aside
      className={`z-50 fixed flex flex-col justify-between items-center gap-20 m-4 mt-25 h-fit rounded-4xl w-18 py-8 shadow-xs ${isDark ? "bg-baby shadow-navy" : " bg-navy shadow-baby "} `}
    >
      <div
        className={`flex flex-col items-center transition-colors gap-15 ${isDark ? "text-navy" : "text-baby"} `}
      >
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <IconComponent
              key={item.id}
              size={item.size}
              title={item.id}
              onMouseEnter={() => setActiveMenu(item.id)}
              onMouseLeave={() => setActiveMenu(null)}
              onClick={() => {
                const element = document.getElementById(item.target);
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`cursor-pointer duration-300 hover:scale-110 rounded-full p-1 ${
                isDark
                  ? "hover:bg-navy hover:text-baby"
                  : "hover:bg-baby hover:text-navy"
              }`}
            />
          );
        })}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              variants={tooltipVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className={`absolute left-18 ${
                tooltipPosition[activeMenu]
              } py-3 px-7 shadow-xs ${
                isDark
                  ? "bg-baby shadow-navy"
                  : "bg-navy shadow-baby"
              } rounded-full`}
            >
              {activeMenu}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </aside>
  );
};

export default Sidebar;
