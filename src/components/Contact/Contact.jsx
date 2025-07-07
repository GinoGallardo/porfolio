import ContactSocialLink from "./ContactSocialLink";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="text-white py-5 md:py-30 max-w-7xl grid grid-cols-1 md:grid-cols-2 mx-auto px-4 gap-4"
    >
      <ContactSocialLink />
      <ContactForm />
    </section>
  );
};

export default Contact;
