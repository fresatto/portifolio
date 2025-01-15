import { HTMLInputTypeAttribute } from "react";
import { useFormContext, FieldError } from "react-hook-form";
import { z } from "zod";

import { Container, StyledInput } from "./styles";

type CustomInputProps<TSchema extends z.ZodType<any>> = {
  name: keyof z.infer<TSchema>;
  label: string;
  schema: TSchema;
  type?: HTMLInputTypeAttribute;
};

const CustomInput = <TSchema extends z.ZodType<any>>({
  name,
  label,
  schema,
  type = "text",
  ...props
}: CustomInputProps<TSchema>) => {
  const {
    register,
    formState: { errors, touchedFields },
  } = useFormContext();

  const error = errors[name] as FieldError | undefined;

  const isValid: boolean = (touchedFields[name] as any) && !error;

  return (
    <Container>
      <StyledInput
        placeholder={label}
        error={!!error}
        isvalid={isValid}
        type={type}
        {...register(name as string)}
        {...props}
      />
    </Container>
  );
};

export default CustomInput;
