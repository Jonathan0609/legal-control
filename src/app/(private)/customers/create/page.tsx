'use client';

import TitlePage from '@/components/_commons/TitlePage';
import CustomersForm from '@/components/Customers/CustomersForm';
import { Stack } from '@mantine/core';

export default function CustomersCreatePage() {
  return (
    <Stack>
      <TitlePage>Cadastro de cliente</TitlePage>

      <CustomersForm />
    </Stack>
  );
}
