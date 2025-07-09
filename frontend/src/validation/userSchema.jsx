import { z } from "zod";

const useSchema = z.object({
  firstName: z
    .string()
    .min(3, {
      message: "El nombre necesita al menos 3 caracteres",
    })
    .max(30, {
      message: "El maximo de caracteres es 30",
    }),
  lastName: z
    .string()
    .min(3, {
      message: "El apellido necesita al menos 3 caracteres",
    })
    .max(30, {
      message: "El maximo de caracteres es 30",
    }),
  email: z.string().email({
    message: "Ingrese un correo valido",
  }),
  message: z
    .string()
    .min(3, {
      message: "El nombre necesita al menos 3 caracteres",
    })
    .max(200, {
      message: "El maximo de caracteres es 200",
    }),
});

export default useSchema;
