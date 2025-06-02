'use client';

import { useForm } from '@mantine/form';
import { RecoveryPasswordFormValues } from './form.types';
import { Stack, TextInput } from '@mantine/core';
import { IconRecordMail } from '@tabler/icons-react';
import ButtonLink from '@/components/_commons/Buttons/ButtonLink/index.';
import { redirect } from 'next/navigation';
import ButtonPrimary from '@/components/_commons/Buttons/ButtonPrimary';

export default function RecoveryPasswordForm() {
  const form = useForm<RecoveryPasswordFormValues>({ mode: 'uncontrolled' });

  const handleSubmit = (values: RecoveryPasswordFormValues) => {
    console.log(values);

    redirect('/auth/recovery-password/10');
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap="lg">
        <TextInput
          label="E-mail"
          withAsterisk
          leftSection={<IconRecordMail size={18} />}
          type="email"
          {...form.getInputProps('email')}
        />

        <ButtonPrimary fullWidth type="submit">
          Enviar
        </ButtonPrimary>

        <ButtonLink fullWidth variant="default" size="xs" href="/auth/login">
          Voltar
        </ButtonLink>
      </Stack>
    </form>
  );
}
