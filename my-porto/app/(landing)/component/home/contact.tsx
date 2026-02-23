"use client";

import { useTheme } from "@/src/context/ThemeContext";
import Image from "next/image";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaWhatsapp,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import Button from "../ui/button";

const Contact = () => {
  const { isDark, setIsDark } = useTheme();

  const contactMethods = [
    {
      logo: <SiGmail />,
      name: "Email",
      info: "adho77798@gmail.com",
    },
    {
      logo: <FaWhatsapp />,
      name: "Phone",
      info: "+62 812-3456-7890",
    },
    {
      logo: <FaLocationDot />,
      name: "Location",
      info: "Depok, Indonesia",
    },
  ];

  const socialMedia = [
    {
      logo: <FaLinkedin size={24} />,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammad-abdullah-437764354/",
    },
    {
      logo: <FaGithub size={24} />,
      name: "GitHub",
      href: "https://github.com/MhmmdAbdullah",
    },
    {
      logo: <FaInstagram size={24} />,
      name: "Instagram",
      href: "https://www.instagram.com/mhmmd.abdullah/",
    },
  ];

  return (
    <section
      id="contact"
      className="container mx-auto scroll-mt-25"
    >
      <div className={` ${isDark ? "bg-darkblue" : "bg-baby"} my-5 ml-30 mr-8 rounded-3xl transition-colors duration-1000 ease-in-out`}>
        <div
        className={`gap-10 h-137 p-8 ${isDark ? "text-white" : "text-darkblue"}`}
      >
        <div className={`p-2 mb-8 text-center`}>
          <h1 className="text-[40px] font-bold">Contact me</h1>
        </div>
        <div className="flex justify-center items-center h-90 ">
          <div className="flex flex-col gap-10 w-100">
            <h1 className="text-[30px] font-medium">
              Let's talk on Something{" "}
              <span
                className={`font-bold ${isDark ? "text-white" : "text-black"}`}
              >
                great
              </span>{" "}
              together.
            </h1>
            <div className="flex flex-col gap-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div
                    className={`text-2xl ${isDark ? "text-white" : "text-darkblue"}`}
                  >
                    {method.logo}
                  </div>
                  <div>
                    <p className="text-sm">{method.info}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              {socialMedia.map((media, index) => (
                <a
                  key={index}
                  href={media.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDark ? " text-white" : "text-darkblue"} hover:scale-110 transition-transform duration-300`}
                >
                  {media.logo}
                </a>
              ))}
            </div>
          </div>
          <div className="w-90 bg-white text-black font-medium h-90 p-4 rounded-xl flex flex-col justify-center ">
            <div className="w-full py-2 gap-8  flex flex-col">
              <div className="text-xs font-semibold">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  className="border-b-2 border-black py-1 w-full"
                  placeholder="Ex: Nurman"
                ></input>
              </div>
              <div className="text-xs font-semibold">
                <label htmlFor="email">Your Email</label>
                <input
                  id="email"
                  className="border-b-2 border-black py-1 w-full"
                  placeholder="Ex: nurman@example.com"
                ></input>
              </div>
              <div className="text-xs font-semibold">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  className="border-b-2 border-black py-1 w-full"
                  rows={6}
                  placeholder="Type your message here ..."
                ></textarea>
              </div>
            </div>
            <Button
              variant={`${isDark ? "darkmode" : "lightmode"}`}
              className="rounded-xl p-3!"
            >
              Send Message
            </Button>
          </div>
        </div>
      </div>
      </div>
      
    </section>
  );
};

export default Contact;
