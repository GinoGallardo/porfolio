import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

function SocialLinks() {
  return (
    <div className="flex gap-x-6 ">
      <a
        href="https://github.com/GinoGallardo"
        target="_blank"
        className="hover:text-[#f97e3e]"
      >
        <FaGithub className=" filter hover:drop-shadow-[0_0_15px_#f97e3e] text-[2.5em] md:text-[3em] lg:text-[3.5em]" />
      </a>
      <a
        href="http://www.linkedin.com/in/gino-gallardo-7053801a9"
        target="_blank"
        className="hover:text-[#f97e3e]"
      >
        <FaLinkedinIn className=" filter hover:drop-shadow-[0_0_15px_#f97e3e] text-[2.5em] md:text-[3em] lg:text-[3.5em]" />
      </a>
    </div>
  );
}

export default SocialLinks;
