import React from "react";
import { FormProvider } from "react-hook-form";
import { Typography } from "@mui/material";

import AnimatedPageContainer from "../../components/AnimatedPageContainer";
import InfoSection from "../../components/InfoSection";
import CustomInput from "../../components/CustomInput";
import Button from "../../components/Button";
import { MessageInput, ThreeInputsWrapper } from "./styles";
import Alert from "./components/Alert";
import { useContactController } from "./useContactController";

const Contact: React.FC = () => {
  const { hookForm, formSchema, loading, onSubmit } = useContactController();

  return (
    <AnimatedPageContainer>
      <InfoSection title="Entrar em contato">
        <Alert>
          Sua mensagem foi enviada com sucesso. Agradeço pelo contato e
          retornarei o mais breve possível.
        </Alert>
        <Typography mb="16px">
          Entre em contato comigo para tirar dúvidas, discutir projetos ou
          apenas para dizer "oi". Preencha o formulário abaixo, e retornarei o
          mais breve possível.
        </Typography>
        <FormProvider {...hookForm}>
          <form onSubmit={hookForm.handleSubmit(onSubmit)}>
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
              disabled={!hookForm.formState.isValid}
              onClick={() => onSubmit(hookForm.getValues())}
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
