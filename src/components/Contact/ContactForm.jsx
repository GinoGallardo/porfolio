
export default function ContactForm() {
  return (
    <div className="isolate bg-[#f97e3e]/20 rounded-2xl px-6 py-15 sm:py-20 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <p className="mt-2 text-4xl">Envíame un correo electrónico.</p>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 lg:text-2xl max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block">
              Nombre
            </label>
            <div className="mt-2.5">
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
            <div className="mt-2.5">
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
            <div className="mt-2.5">
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
            <div className="mt-2.5">
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
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-[#f97e3e] px-3.5 py-2.5 text-center text-sm md:text-2xl font-semibold text-white shadow-xs hover:bg-[#f97e3e]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f97e3e]"
          >
            Enviar correo electrónico
          </button>
        </div>
      </form>
    </div>
  );
}
