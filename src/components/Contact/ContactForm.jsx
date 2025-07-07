import Button from "../Button/Button";

export default function ContactForm() {
  return (
    <div className="bg-[#f97e3e]/20 rounded-2xl px-6 py-5 md:py-15 sm:py-20 lg:px-8">
      <p className="md:mt-2 text-center text-2xl md:text-4xl">
        Envíame un correo electrónico.
      </p>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 lg:text-2xl max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-4 md:gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block">
              Nombre
            </label>
            <div className="md:mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md px-3.5 py-2 text-xl outline-1 -outline-offset-1 outline-gray-300 placeholder:text-[#f97e3e] focus:outline-2 focus:-outline-offset-2 focus:outline-[#f97e3e]"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block">
              Apellido
            </label>
            <div className="md:mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md px-3.5 py-2 text-xl outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#f97e3e]"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block">
              Correo electrónico
            </label>
            <div className="md:mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md px-3.5 py-2 text-xl outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#f97e3e]"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block">
              Mensaje
            </label>
            <div className="md:mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md px-3.5 py-2 text-xl outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#f97e3e]"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full mt-5 md:mt-10">
          <Button type="submit">Enviar correo electrónico</Button>
        </div>
      </form>
    </div>
  );
}
