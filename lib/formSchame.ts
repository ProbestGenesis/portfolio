import { z } from "zod";


export const contactForm = z.object({
  email: z.string().email("Email invalide"),
  message: z.string().min(100, "Le message doit faire au moins 100 caractères") })