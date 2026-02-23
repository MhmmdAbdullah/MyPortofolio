"use client";

import { useState } from "react"; // Tambahkan useState
import { useTheme } from "@/src/context/ThemeContext";
import ProjectCard from "../ui/projectCard";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { AnimatePresence, motion, scale, type Variants } from "framer-motion";
import ProjectZoomCard from "../ui/projectZoomCard";
import { img } from "framer-motion/client";

const Projects = () => {
  const { isDark } = useTheme();
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const initialProjects = [
    {
      id: 1,
      title: "Project 1",
      desc: "This is a brief description of Project 1.",
      href: "https://github.com/MhmmdAbdullah/Optimization-Final-Exam",
      img: "/Self_logo.png",
    },
    {
      id: 2,
      title: "Project 2",
      desc: "This is a brief description of Project 2.",
      href: "#",
      img: "/Porto-1.png",
    },
    {
      id: 3,
      title: "Project 3",
      desc: "This is a brief description of Project 3.",
      href: "#",
      img: "/Self_logo.png",
    },
    {
      id: 4,
      title: "Project 4",
      desc: "This is a brief description of Project 4.",
      href: "#",
      img: "/Self_logo.png",
    },
    {
      id: 5,
      title: "Project 5",
      desc: "This is a brief description of Project 5.",
      href: "#",
      img: "/Self_logo.png",
    },
    {
      id: 6,
      title: "Project 6",
      desc: "This is a brief description of Project 6.",
      href: "#",
      img: "/next.svg",
    },
  ];

  const [projects, setProjects] = useState(initialProjects);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setProjects((prev) => {
      const newArray = [...prev];
      const firstItem = newArray.shift();
      if (firstItem) newArray.push(firstItem);
      return newArray;
    });
  };

  const prevSlide = () => {
    setDirection(-1);
    setProjects((prev) => {
      const newArray = [...prev];
      const lastItem = newArray.pop(); // Ambil item terakhir
      if (lastItem) newArray.unshift(lastItem); // Taruh di awal
      return newArray;
    });
  };

  const cardVariants: Variants = {
    // Pakai custom 'direction' agar arahnya dinamis
    initial: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100, // Jarak diperbesar sedikit agar flow lebih terasa
      scale: 0.9,
    }),
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5, // Samakan durasi masuk
        ease: [0.4, 0, 0.2, 1], // Standard Material Easing (Smooth start & end)
      },
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 100, // Harus berkebalikan persis dengan initial
      scale: 0.9,
      transition: {
        duration: 0.5, // Samakan durasi keluar agar sinkron
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  };

  return (
    <section
      id="project"
      className="container mx-auto scroll-mt-25"
    >
      <div className={` ${isDark ? "bg-darkblue" : "bg-baby"} my-5 ml-30 mr-8 rounded-3xl transition-colors duration-1000 ease-in-out`}>
        <div
        className={`gap-10 h-137 p-8 ${isDark ? "text-white" : "text-darkblue"}`}
      >
        <div className={`p-2 mb-7 text-center`}>
          <h1 className="text-[40px] font-bold">Projects</h1>
          <p className="font-medium text-sm">
            Look at some of my projects.
          </p>
        </div>

        <div className="flex justify-center items-center gap-2">
          {/* Tombol Kiri */}
          <FaArrowAltCircleLeft
            size={48}
            onClick={prevSlide}
            className="cursor-pointer hover:scale-125 duration-300 shrink-0"
          />

          {/* Container Card */}
          <div className="bg-white/20 flex flex-wrap gap-4 p-4 rounded-3xl overflow-hidden justify-center items-center min-w-fit">
            <AnimatePresence mode="popLayout">
              {projects.slice(0, 4).map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  custom={direction}
                  layout
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer "
                >
                  <ProjectCard title={project.title} img={project.img}>
                    <p className="pt-2">{project.desc}</p>
                  </ProjectCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Tombol Kanan */}
          <FaArrowAltCircleRight
            size={48}
            onClick={nextSlide}
            className="cursor-pointer hover:scale-125 duration-300 shrink-0"
          />
        </div>
        <ProjectZoomCard
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject?.title || ""}
          img={selectedProject?.img || ""}
          link={selectedProject?.href || ""}
        >
          <p className="pt-2">{selectedProject?.desc || ""}</p>
        </ProjectZoomCard>
      </div></div>
      
    </section>
  );
};

export default Projects;
