'use client';

import { useForm } from '@mantine/form';
import { CreateUserFormValues } from './form.types';
import { Grid, GridCol, PasswordInput, Stack, TextInput } from '@mantine/core';
import {
  IconPassword,
  IconRecordMail,
  IconSignature,
} from '@tabler/icons-react';
import ButtonPrimary from '@/components/_commons/Buttons/ButtonPrimary';

export default function CreateUserForm() {
  const form = useForm<CreateUserFormValues>({ mode: 'uncontrolled' });

  const handleSubmit = (values: CreateUserFormValues) => {
    console.log(values);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap="lg">
        <Grid>
          <GridCol span={6}>
            <TextInput
              label="Nome"
              withAsterisk
              leftSection={<IconSignature size={18} />}
              {...form.getInputProps('name')}
            />
          </GridCol>

          <GridCol span={6}>
            <TextInput
              label="Sobrenome"
              withAsterisk
              leftSection={<IconSignature size={18} />}
              {...form.getInputProps('lastName')}
            />
          </GridCol>

          <GridCol span={12}>
            <TextInput
              label="E-mail"
              withAsterisk
              leftSection={<IconRecordMail size={18} />}
              type="email"
              {...form.getInputProps('email')}
            />
          </GridCol>

          <GridCol span={12}>
            <PasswordInput
              label="Senha"
              withAsterisk
              leftSection={<IconPassword size={18} />}
              type=""
              {...form.getInputProps('password')}
            />
          </GridCol>
        </Grid>

        <ButtonPrimary type="submit">Entrar</ButtonPrimary>
      </Stack>
    </form>
  );
}
