import { z } from "zod";

export const formSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  cellphone: z.string(),
  message: z.string(),
});
