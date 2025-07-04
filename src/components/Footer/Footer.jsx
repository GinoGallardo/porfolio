import { IoIosArrowUp } from "react-icons/io";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () => {
  return (
    <footer className="h-20 max-w-7xl mx-auto text-white flex flex-col justify-center items-center">
      <div>
        <IoIosArrowUp />
      </div>
      <div className="flex w-full items-center justify-around">
        <div className="md:text-xl">c 2025 Gino Gallardo</div>
        <div className="text-[8px] md:text-xs">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
