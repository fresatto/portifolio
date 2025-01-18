import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { useFormContext, FieldError } from "react-hook-form";
import { z } from "zod";

import { Container, StyledInput } from "./styles";

type CustomInputProps<TSchema extends z.ZodType<any>> = {
  name: keyof z.infer<TSchema>;
  label: string;
  schema: TSchema;
  type?: HTMLInputTypeAttribute;
  phone?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const applyPhoneMask = (value: string) => {
  // Remove todos os caracteres que não são números
  const numericValue = value.replace(/\D/g, "");

  // Aplica a máscara
  const maskedValue = numericValue
    .replace(/^(\d{2})(\d)/, "($1) $2") // Adiciona os parênteses e espaço após os 2 primeiros dígitos
    .replace(/(\d{5})(\d)/, "$1-$2") // Adiciona o traço após o quinto dígito
    .slice(0, 15); // Limita o comprimento ao tamanho da máscara

  return maskedValue;
};

const CustomInput = <TSchema extends z.ZodType<any>>({
  name,
  label,
  schema,
  type = "text",
  phone = false,
  ...props
}: CustomInputProps<TSchema>) => {
  const {
    setValue,
    register,
    formState: { errors, touchedFields },
  } = useFormContext();

  const error = errors[name] as FieldError | undefined;

  const isValid: boolean = (touchedFields[name] as any) && !error;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (phone) {
      const maskedValue = applyPhoneMask(value);
      setValue(name as string, maskedValue);
    } else {
      setValue(name as string, value);
    }
  };

  return (
    <Container>
      <StyledInput
        placeholder={label}
        error={!!error}
        isvalid={isValid}
        type={type}
        {...register(name as string)}
        {...props}
        onChange={handleOnChange}
      />
    </Container>
  );
};

export default CustomInput;
