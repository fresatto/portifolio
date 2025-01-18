import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

import AnimatedPageContainer from "../../components/AnimatedPageContainer";
import InfoSection from "../../components/InfoSection";
import CustomInput from "../../components/CustomInput";
import { formSchema } from "./schema";
import { MessageInput, ThreeInputsWrapper } from "./styles";
import Button from "../../components/Button";
import emailjs from "@emailjs/browser";
import { Typography } from "@mui/material";

type FormValues = z.infer<typeof formSchema>;

const fakeDelay = () => new Promise((resolve) => setTimeout(resolve, 1000));

const Contact: React.FC = () => {
  const methods = useForm<FormValues>({
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

  return (
    <AnimatedPageContainer>
      <InfoSection title="Entrar em contato">
        <Typography mb="16px">
          Entre em contato comigo para tirar dúvidas, discutir projetos ou
          apenas para dizer "oi". Preencha o formulário abaixo, e retornarei o
          mais breve possível.
        </Typography>
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

            <Button
              type="submit"
              loading={loading}
              disabled={!methods.formState.isValid}
              onClick={() => onSubmit(methods.getValues())}
            >
              Enviar mensagem
            </Button>
          </form>
        </FormProvider>
        <hr />
        <Typography>
          Se preferir, me chame pelo WhatsApp{" "}
          <a
            href="https://wa.me/5511941509081?text=Ol%C3%A1!%20Tudo%20bem%3F"
            target="_blank"
            className="link"
          >
            clicando aqui.
          </a>
        </Typography>
      </InfoSection>
    </AnimatedPageContainer>
  );
};

export default Contact;
