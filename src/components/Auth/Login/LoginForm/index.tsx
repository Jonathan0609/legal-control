'use client';

import { useForm } from '@mantine/form';
import { LoginFormValues } from './form.types';
import { PasswordInput, Stack, TextInput } from '@mantine/core';
import { IconPassword, IconRecordMail } from '@tabler/icons-react';
import ButtonPrimary from '@/components/_commons/Buttons/ButtonPrimary';
import { redirect } from 'next/navigation';
import { signIn } from 'next-auth/react';

export default function LoginForm() {
  const form = useForm<LoginFormValues>({ mode: 'uncontrolled' });

  const handleSubmit = (values: LoginFormValues) => {
    console.log(values);

    signIn();

    redirect('/dashboard');
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

        <PasswordInput
          label="Senha"
          withAsterisk
          leftSection={<IconPassword size={18} />}
          {...form.getInputProps('password')}
        />

        <ButtonPrimary type="submit">Entrar</ButtonPrimary>
      </Stack>
    </form>
  );
}
