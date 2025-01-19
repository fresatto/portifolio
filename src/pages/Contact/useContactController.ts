import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { formSchema } from "./schema";

export type FormValues = z.infer<typeof formSchema>;

const fakeDelay = () => new Promise((resolve) => setTimeout(resolve, 1000));

export function useContactController() {
  const hookForm = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "all",
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    try {
      await fakeDelay();

      // await emailjs.send(
      //   "service_uilp3pq",
      //   "template_fwinlu9",
      //   {
      //     from_name: data.username,
      //     from_cellphone: data.cellphone,
      //     from_email: data.email,
      //     message: data.message,
      //   },
      //   "55YsOpjQTFOJBMJnu"
      // );
      // TODO: Exibir mensagem de sucesso
    } catch (error) {
      // TODO: Exibir mensagem de erro
    } finally {
      setLoading(false);
    }
  };

  return {
    hookForm,
    formSchema,
    loading,
    onSubmit,
  };
}
