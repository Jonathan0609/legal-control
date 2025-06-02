import CreateUserForm from '@/components/Auth/CreateUser/CreateUserForm';
import { Anchor, Stack, Text, Title } from '@mantine/core';

export default function CreateUserPage() {
  return (
    <Stack gap="lg" p="sm" w="100%">
      <Stack gap="md" align="center">
        <Title lh={1}>Criação de conta</Title>

        <Text c="dimmed" lh={1}>
          Já tem uma conta? <Anchor href="/auth/login">Login</Anchor>
        </Text>
      </Stack>

      <CreateUserForm />
    </Stack>
  );
}
