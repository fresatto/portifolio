import { forwardRef } from "react";
import { useFormContext, FieldError } from "react-hook-form";
import { z } from "zod";

import { Container, StyledInput } from "./styles";

type CustomTextAreaProps<TSchema extends z.ZodType<any>> = {
  name: keyof z.infer<TSchema>;
  label: string;
  schema: TSchema;
};

const CustomTextArea = forwardRef<
  HTMLTextAreaElement,
  CustomTextAreaProps<z.ZodType<any>>
>(({ name, label, schema, ...props }, ref) => {
  const {
    register,
    formState: { errors, touchedFields },
  } = useFormContext();

  const error = errors[name as string] as FieldError | undefined;

  const isValid: boolean = (touchedFields[name as string] as any) && !error;

  return (
    <Container>
      <StyledInput
        placeholder={label}
        error={!!error}
        isvalid={isValid}
        {...register(name as string)}
        {...props}
      />
    </Container>
  );
});

export default CustomTextArea;
