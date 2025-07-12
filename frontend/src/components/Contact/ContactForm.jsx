import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useSchema from "../../validation/userSchema";
import { useState } from "react";

export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(useSchema),
  });

  const onSubmit = async (data) => {
    setIsSending(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Mensaje enviado correctamente ✅");
        reset();
      } else {
        alert("Error al enviar mensaje.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Error al conectar con el servidor.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-[#f97e3e]/20 rounded-2xl px-6 py-5 md:py-15 sm:py-20 lg:px-8">
      <p className="md:mt-2 text-center text-2xl md:text-4xl">
        Envíame un correo electrónico.
      </p>
      <form
        action="#"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mt-16 lg:text-2xl max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-4 md:gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block">
              Nombre
            </label>
            <div className="md:mt-2.5">
              <input
                id="firstName"
                name="firstName"
                {...register("firstName")}
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md px-3.5 py-2 text-xl outline-1 -outline-offset-1 outline-gray-300 placeholder:text-[#f97e3e] focus:outline-2 focus:-outline-offset-2 focus:outline-[#f97e3e]"
              />
              {errors.firstName?.message && (
                <p className="text-red-700 text-sm p-1">
                  {errors.firstName?.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="lastName" className="block">
              Apellido
            </label>
            <div className="md:mt-2.5">
              <input
                id="lastName"
                name="lastName"
                {...register("lastName")}
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md px-3.5 py-2 text-xl outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#f97e3e]"
              />
              {errors.lastName?.message && (
                <p className="text-red-700 text-sm p-1">
                  {errors.lastName?.message}
                </p>
              )}
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
                {...register("email")}
                type="email"
                autoComplete="email"
                className="block w-full rounded-md px-3.5 py-2 text-xl outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#f97e3e]"
              />
              {errors.email?.message && (
                <p className="text-red-700 text-sm p-1">
                  {errors.email?.message}
                </p>
              )}
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
                {...register("message")}
                rows={4}
                className="block w-full rounded-md px-3.5 py-2 text-xl outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#f97e3e]"
                defaultValue={""}
              />
              {errors.message?.message && (
                <p className="text-red-700 text-sm p-1">
                  {errors.message?.message}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full mt-5 md:mt-10">
          <Button type="submit" disabled={isSending}>
            {isSending ? (
              <p className="flex items-center justify-center">
                <span class="loader"></span> enviando...{" "}
              </p>
            ) : (
              "Enviar correo electrónico"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
