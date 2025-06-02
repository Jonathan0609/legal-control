import TitlePage from '@/components/_commons/TitlePage';
import CasesFormTabs from '@/components/Cases/CasesFormTabs';
import { Stack } from '@mantine/core';

export default function CasesProcessesCreatePage() {
  return (
    <Stack>
      <TitlePage>Cadastro de caso</TitlePage>

      <CasesFormTabs />
    </Stack>
  );
}
