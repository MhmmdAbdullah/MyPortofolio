
import { div } from "framer-motion/client";
import Image from "next/image";
import Hero from "./component/home/hero";
import About from "./component/home/about";
import Projects from "./component/home/projects";
import Contact from "./component/home/contact";

export default function Home() {
  return (
    <div className="mt-25">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
