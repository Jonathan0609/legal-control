import RecoveryPasswordForm from '@/components/Auth/RecoveryPassword/RecoveryPasswordForm';
import { Stack, Text, Title } from '@mantine/core';

export default function RecoveryPasswordPage() {
  return (
    <Stack gap="lg" p="sm" w="100%">
      <Stack gap="sm" align="center">
        <Title lh={1}>Esqueceu a senha?</Title>

        <Text c="dimmed" lh={1}>
          Ao informar o e-mail você receberá um código para realizar a
          recuperação da sua senha.
        </Text>
      </Stack>

      <RecoveryPasswordForm />
    </Stack>
  );
}
