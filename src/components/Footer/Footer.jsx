import Link from "../Header/Link";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () => {
  return (
    <footer className="h-20 max-w-7xl mx-auto text-white flex justify-around items-center">
      <div className="text-xl">c 2025 Gino Gallardo</div>
      <div className="text-xs">
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
