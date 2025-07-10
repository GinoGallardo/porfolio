import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import mongoose from "mongoose";
import dotenv from "dotenv";
import ContactMessage from "./models/ContactMessage.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB conectado"))
  .catch((err) => console.error("❌ Error conectando a MongoDB:", err));

// Ruta raíz
app.get("/", (req, res) => {
  res.send("Servidor backend funcionando 👍");
});

// Ruta para enviar el formulario
app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  try {
    // Enviar email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `Nuevo mensaje de ${firstName} ${lastName}`,
      text: message,
    });

    // Guardar en MongoDB
    await ContactMessage.create({ firstName, lastName, email, message });

    res.status(200).json({
      success: true,
      message: "Email enviado y guardado correctamente",
    });
  } catch (error) {
    console.error("❌ Error en el backend:", error);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
});

export default app;
