import { z } from "zod";

export const formSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  cellphone: z.string().min(11).max(11),
  message: z.string().min(8),
});
