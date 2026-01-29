"use client"

import { useTheme } from "@/src/context/ThemeContext";

const Projects = () => {
  const { isDark, setIsDark } = useTheme();

  return (
    <section
      id="project"
      className={` ${isDark ? "bg-navy" : "bg-baby"} my-5 scroll-mt-25 rounded-3xl`}
    >
      <div className="flex justify-center items-center gap-10 h-137 p-8"></div>
    </section>
  );
};

export default Projects;
