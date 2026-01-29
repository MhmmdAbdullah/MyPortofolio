
import { div } from "framer-motion/client";
import Image from "next/image";
import Hero from "./component/home/hero";
import About from "./component/home/about";
import Projects from "./component/home/projects";

export default function Home() {
  return (
    <div className="pt-24 ml-24 px-6">
      <Hero />
      <About />
      <Projects />
    </div>
  );
}
