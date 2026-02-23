import { useTheme } from "@/src/context/ThemeContext";
import Image from "next/image";

type TProjectCardProps = {
  title: string;
  children: React.ReactNode;
  img: string;
};

const ProjectCard = ({ title, children, img }: TProjectCardProps) => {
  const { isDark } = useTheme();
  return (
    <div
      className={`${isDark ? "bg-baby" : "bg-darkblue"} p-2 max-w-54 h-80 gap-8 rounded-lg shadow-md`}
    >
      <div
        className={`text-md font-bold mb-2 ${isDark ? "text-darkblue" : "text-white"}`}
      >
        {title}
      </div>
      <div className={` bg-white  h-50 w-50 flex items-center justify-center p-1`}>
        <Image
          src={img}
          alt={title}
          width={210}
          height={210}
          className=" object-cover"
        />
      </div>
      <div
        className={`${isDark ? "text-darkblue" : "text-white"} font-medium text-xs`}
      >
        {children}
      </div>
    </div>
  );
};

export default ProjectCard;
