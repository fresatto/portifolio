import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { formSchema } from "./schema";

export type FormValues = z.infer<typeof formSchema>;

const fakeDelay = () => new Promise((resolve) => setTimeout(resolve, 1000));

export function useContactController() {
  const hookForm = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "all",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const resetFields = () => {
    hookForm.resetField("username");
    hookForm.resetField("email");
    hookForm.resetField("cellphone");
    hookForm.resetField("message");
  };

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    try {
      if (!data.username || !data.cellphone || !data.email || !data.message) {
        throw new Error("Missing fields");
      }

      await emailjs.send(
        "service_uilp3pq",
        "template_fwinlu9",
        {
          from_name: data.username,
          from_cellphone: data.cellphone,
          from_email: data.email,
          message: data.message,
        },
        "55YsOpjQTFOJBMJnu"
      );

      setSuccess(true);
      resetFields();
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    hookForm,
    formSchema,
    loading,
    success,
    error,
    onSubmit,
  };
}
