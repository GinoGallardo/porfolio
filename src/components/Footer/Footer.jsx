import { IoIosArrowUp } from "react-icons/io";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () => {
  const handleClick = () => {
    const header = document.getElementById("header");
    if (header) {
      header.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="relative bg-[#f97e3e] mt-4 text-white">
      <div className="absolute inset-x-0 -top-5 md:-top-6 flex justify-center">
        <button
          onClick={handleClick}
          className="w-16 h-16 md:w-30 md:h-30 rounded-full bg-[#f97e3e] flex items-center justify-center"
        >
          <IoIosArrowUp className="absolute -top-1 md:pt-2 w-8 h-8 md:w-12 md:h-12 cursor-pointer" />
        </button>
      </div>
      <div className="max-w-7xl mx-auto py-8 flex justify-around md:justify-between items-center gap-4">
        <div className="text-xl md:text-2xl lg:text-3xl">
          © {new Date().getFullYear()} Gino Gallardo
        </div>
        <div className="text-xs md:text-xl">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
