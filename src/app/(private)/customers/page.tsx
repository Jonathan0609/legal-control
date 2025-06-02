'use client';

import ActionIconRedirect from '@/components/_commons/Buttons/ActionIconRedirect';
import HeaderPage from '@/components/_commons/HeaderPage';
import TableCommon from '@/components/_commons/TableCommon';
import { Stack } from '@mantine/core';

interface CustomerData {
  id: string;
  name: string;
  fantasyName: string;
  phone: string;
}

export default function CustomersPage() {
  const data = [
    {
      id: '1',
      name: 'Cabuloso',
      fantasyName: 'Cruzeiro',
      phone: '31 995878411',
    },
    {
      id: '2',
      name: 'Cabuloso2',
      fantasyName: 'Cruzeiro2',
      phone: '31 995878411',
    },
  ];

  return (
    <Stack>
      <HeaderPage
        titlePage="Listagem de clientes"
        buttonLabel="Cadastrar cliente"
        href="/customers/create"
      />

      <TableCommon<CustomerData>
        data={data}
        columns={[
          { key: 'name', label: 'Nome' },
          { key: 'fantasyName', label: 'Nome fantasia' },
          {
            key: 'phone',
            label: 'Telefone',
          },
          {
            label: 'Ação',
            render: (item) => (
              <ActionIconRedirect href={`/customers/${item.id}`} />
            ),
          },
        ]}
      />
    </Stack>
  );
}
