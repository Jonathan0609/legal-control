'use client';

import ActionIconRedirect from '@/components/_commons/Buttons/ActionIconRedirect';
import HeaderPage from '@/components/_commons/HeaderPage';
import TableCommon from '@/components/_commons/TableCommon';
import { Stack } from '@mantine/core';

interface CasesProcessesData {
  id: string;
  title: string;
  status: string;
}

export default function CasesProcessesPage() {
  const data: CasesProcessesData[] = [
    {
      id: '1',
      title: 'Teste caso e processo',
      status: 'Em andamento',
    },
  ];

  return (
    <Stack>
      <HeaderPage
        titlePage="Listagem de Casos & Processos"
        buttonLabel="Cadastrar caso e processo"
        href="/cases-processes/create"
      />

      <TableCommon<CasesProcessesData>
        data={data}
        columns={[
          { key: 'title', label: 'Título' },
          { key: 'status', label: 'Status do caso' },

          {
            label: 'Ação',
            render: (item) => (
              <ActionIconRedirect href={`/cases-processes/${item.id}`} />
            ),
          },
        ]}
      />
    </Stack>
  );
}
