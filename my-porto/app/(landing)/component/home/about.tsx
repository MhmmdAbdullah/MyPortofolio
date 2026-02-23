"use client";

import { useTheme } from "@/src/context/ThemeContext";
import Image from "next/image";
const About = () => {
  const { isDark, setIsDark } = useTheme();

  return (
    <section id="profile" className="container mx-auto scroll-mt-25">
      <div
        className={` ${isDark ? "bg-darkblue" : "bg-baby"} my-5 ml-30 mr-8 rounded-3xl transition-colors duration-1000 ease-in-out`}
      >
        <div
          className={`gap-10 h-137 p-8 ${isDark ? "text-white" : "text-darkblue"}`}
        >
          <div className={`p-2 mb-8 text-center`}>
            <h1 className="text-[40px] font-bold">Profile</h1>
            <p className="font-medium text-sm">
              I am a Data Science Student and Passionate about Machine Learning
              and AI.
            </p>
          </div>
          <div className="flex justify-center">
            <div className={`p-2 w-100 gap-2 flex flex-col`}>
              <h1 className="text-xl font-bold">About me</h1>
              <p className="text-sm font-medium">
                I am a Data Science Student and Passionate about Machine
                Learning and AI. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and lorem ipsum ipsum
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className="relative w-70 h-70 ">
              <Image
                src="/prototypeProfil.png"
                width={200}
                height={200}
                alt="Profil Light"
                priority
                className={` rounded-full bg-white absolute inset-0 top-5 left-8 transition-opacity duration-1000 ease-in-out ${
                  isDark ? "opacity-0" : "opacity-100"
                }`}
              />

              <Image
                src="/prototypeProfilDark.png"
                width={200}
                height={200}
                alt="Profil Dark"
                priority
                className={`absolute bg-white rounded-full inset-0 top-5 left-8 transition-opacity duration-1000 ease-in-out ${
                  isDark ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
            <div className={`p-2 w-100 gap-2 flex flex-col`}>
              <h1 className="text-xl font-bold">Detail</h1>
              <p className="text-sm font-medium">
                I am a Data Science Student and Passionate about Machine
                Learning and AI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
