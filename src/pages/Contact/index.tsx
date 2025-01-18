import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

import AnimatedPageContainer from "../../components/AnimatedPageContainer";
import InfoSection from "../../components/InfoSection";
import CustomInput from "../../components/CustomInput";
import { formSchema } from "./schema";
import { MessageInput, ThreeInputsWrapper } from "./styles";
import Button from "../../components/Button";

type FormValues = z.infer<typeof formSchema>;

const Contact: React.FC = () => {
  const methods = useForm<FormValues>({
    defaultValues: {
      username: "Gabriel Fresatto",
      cellphone: "(11) 94150-9081",
      email: "gabriel@gmail.com",
      message: "Olá caralho",
    },
    resolver: zodResolver(formSchema),
    mode: "all",
  });

  const onSubmit = (data: FormValues) => {
    // TODO: Integrar

    console.log(data);
  };

  return (
    <AnimatedPageContainer>
      <InfoSection title="Entrar em contato">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <ThreeInputsWrapper>
              <CustomInput
                name="username"
                label="Nome"
                type="text"
                schema={formSchema}
              />
              <CustomInput
                name="email"
                type="email"
                label="Email"
                schema={formSchema}
              />
              <CustomInput
                name="cellphone"
                label="Telefone"
                type="tel"
                phone
                schema={formSchema}
              />
            </ThreeInputsWrapper>
            <MessageInput name="message" label="Mensagem" schema={formSchema} />

            <Button type="submit" onClick={() => onSubmit(methods.getValues())}>
              Enviar mensagem
            </Button>
          </form>
        </FormProvider>
      </InfoSection>
    </AnimatedPageContainer>
  );
};

export default Contact;
