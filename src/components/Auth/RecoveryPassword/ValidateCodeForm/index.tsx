'use client';

import { useForm } from '@mantine/form';
import { PinInput, Stack } from '@mantine/core';
import ButtonLink from '@/components/_commons/Buttons/ButtonLink/index.';
import { ValidateCodeFormValues } from './form.types';
import ButtonPrimary from '@/components/_commons/Buttons/ButtonPrimary';

export default function ValidateCodeForm() {
  const form = useForm<ValidateCodeFormValues>({ mode: 'uncontrolled' });

  const handleSubmit = (values: ValidateCodeFormValues) => {
    console.log(values);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap="lg" align="center">
        <PinInput
          length={6}
          type="number"
          size="md"
          {...form.getInputProps('code')}
        />

        <ButtonPrimary fullWidth type="submit">
          Validar código
        </ButtonPrimary>

        <ButtonLink fullWidth variant="default" size="xs" href="/auth/login">
          Voltar
        </ButtonLink>
      </Stack>
    </form>
  );
}
