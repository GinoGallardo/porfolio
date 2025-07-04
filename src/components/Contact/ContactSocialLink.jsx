import Image from "../../assets/gino-stup.png";
import SocialLinks from "../SocialLinks/SocialLinks";

const ContactSocialLink = () => {
  return (
    <section className="isolate rounded-2xl flex flex-col items-center justify-center gap-8 ">
      <h2 className="text-4xl text-center text-white font-bold lg:mb-8 md:text-[102px]">
        contacto.
      </h2>
      <p className="text-xl md:text-2xl lg:text-3xl md:leading-9 -tracking-wide md:tracking-widest">
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
