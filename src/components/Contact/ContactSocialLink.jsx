import Image from "../../assets/gino-stup.png"
import SocialLinks from "../SocialLinks/SocialLinks";

const ContactSocialLink = () => {
  return (
    <section className="isolate rounded-2xl flex flex-col items-center justify-center gap-8 ">
        <h2 className="md:text-[102px]">contacto.</h2>
        <p className="md:text-2xl">
          Ponte en contacto conmigo a través de las redes sociales o envíame un
          correo electrónico.
        </p>
        <div className="lg:text-3xl flex">
          <SocialLinks />
        </div>
    </section>
  );
};

export default ContactSocialLink;
