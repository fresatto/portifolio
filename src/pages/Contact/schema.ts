import { z } from "zod";

const MASKED_PHONE_LENGTH = 15;

export const formSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  cellphone: z.string().min(MASKED_PHONE_LENGTH).max(MASKED_PHONE_LENGTH),
  message: z.string().min(8),
});
