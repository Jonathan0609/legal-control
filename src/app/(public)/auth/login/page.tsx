import ButtonLink from '@/components/_commons/Buttons/ButtonLink/index.';
import LoginForm from '@/components/Auth/Login/LoginForm';
import { Group, Stack, Text, Title } from '@mantine/core';

export default function LoginPage() {
  return (
    <Stack gap="lg" p="sm" w="100%">
      <Stack gap="md" align="center">
        <Title lh={1}>Login</Title>

        <Text c="dimmed" lh={1}>
          Informe o e-mail e senha para acessar a plataforma
        </Text>
      </Stack>

      <LoginForm />

      <Group justify="space-between">
        <ButtonLink
          variant="transparent"
          size="xs"
          href="/auth/recovery-password"
        >
          Esqueci minha senha
        </ButtonLink>

        <ButtonLink variant="transparent" size="xs" href="/auth/create-user">
          Criar conta
        </ButtonLink>
      </Group>
    </Stack>
  );
}
