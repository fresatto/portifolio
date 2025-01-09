import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

import AnimatedPageContainer from "../../components/AnimatedPageContainer";
import InfoSection from "../../components/InfoSection";
import CustomInput from "../../components/CustomInput";
import { formSchema } from "./schema";

type FormValues = z.infer<typeof formSchema>;

const Contact: React.FC = () => {
  const methods = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <AnimatedPageContainer>
      <InfoSection title="Entrar em contato">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <CustomInput name="username" label="Username" schema={formSchema} />
            <CustomInput name="email" label="Email" schema={formSchema} />
            <button type="submit">Enviar</button>
          </form>
        </FormProvider>
      </InfoSection>
    </AnimatedPageContainer>
  );
};

export default Contact;
