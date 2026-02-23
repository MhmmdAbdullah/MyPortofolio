import { useTheme } from "@/src/context/ThemeContext";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";

type TProjectCardProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  img: string;
  link?: string;
};

const ProjectZoomCard = ({
  title,
  children,
  img,
  isOpen,
  onClose,
  link,
}: TProjectCardProps) => {
  const { isDark } = useTheme();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Background Overlay / Blur */}
      <div
        className="absolute inset-0 bg-black/60 transition-opacity"
        onClick={onClose}
      />

      {/* Konten Modal: Menggunakan relative agar berada di atas backdrop */}
      <div
        className={`${
          isDark ? "bg-baby text-darkblue" : "bg-darkblue text-white"
        } relative z-10 flex flex-col md:flex-row  p-8 gap-8 rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden`}
        onClick={(e) => e.stopPropagation()} // Supaya klik di dalam modal tidak menutup modal
      >
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer hover:scale-110 transition-transform"
        >
          <FiXCircle size={28} />
        </button>

        {/* Bagian Gambar */}
        <div className="shrink-0 h-75 w-75 bg-white items-center justify-center flex p-1">
          <Image
            src={img}
            alt={title}
            width={300}
            height={300}
            className=" object-cover"
          />
        </div>

        {/* Bagian Teks */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold uppercase ">{title}</h2>
          <div className="font-medium text-sm leading-relaxed opacity-90">
            {children}
          </div>
        </div>

        
          <div
            className={`absolute bottom-6 right-8 ${isDark ? "text-darkblue" : "text-white"}`}
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
            >
              View Project
              <FaExternalLinkAlt size={16} />
            </a>
          </div>
       
      </div>
    </div>
  );
};

export default ProjectZoomCard;
