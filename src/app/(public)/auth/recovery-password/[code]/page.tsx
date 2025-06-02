import ValidateCodeForm from '@/components/Auth/RecoveryPassword/ValidateCodeForm';
import { Stack, Text, Title } from '@mantine/core';

export default function RecoveryPasswordValidateCodePage() {
  return (
    <Stack gap="lg" p="sm" w="100%">
      <Stack gap="md" align="center">
        <Title lh={1}>Validação do código</Title>

        <Text c="dimmed" lh={1}>
          Informe o código de acesso abaixo para validarmos!
        </Text>
      </Stack>

      <ValidateCodeForm />
    </Stack>
  );
}
