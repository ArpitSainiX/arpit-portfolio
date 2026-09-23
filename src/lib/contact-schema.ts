import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Tell me your name").max(80),
  email: z.string().trim().email("That email doesn't look right"),
  message: z.string().trim().min(10, "A few more words would help").max(2000),
  company: z.string().max(0).optional(), // honeypot
});

export type ContactInput = z.infer<typeof contactSchema>;
