'use client';

import { Grid, GridCol, Stack, Textarea, TextInput } from '@mantine/core';
import SelectCaseType from '@/components/_commons/Inputs/SelectTypeOfLegalService';
import SelectCaseStatus from '@/components/_commons/Inputs/SelectCaseStatus';
import { useCasesFormContext } from '../CasesFormTabs/form.provider';

export default function CasesForm() {
  const form = useCasesFormContext();

  return (
    <Stack>
      <Grid gutter="xs">
        <GridCol span={{ base: 12, md: 6, lg: 4 }}>
          <TextInput
            label="Título"
            withAsterisk
            {...form.getInputProps('title')}
            key={form.key('title')}
          />
        </GridCol>

        <GridCol span={{ base: 12, md: 6, lg: 4 }}>
          <SelectCaseType
            label="Tipo"
            withAsterisk
            {...form.getInputProps('type')}
            key={form.key('type')}
          />
        </GridCol>

        <GridCol span={{ base: 12, md: 6, lg: 4 }}>
          <SelectCaseStatus
            label="Status"
            withAsterisk
            {...form.getInputProps('status')}
            key={form.key('status')}
          />
        </GridCol>

        <GridCol span={12}>
          <Textarea
            label="Descrição"
            rows={3}
            {...form.getInputProps('description')}
            key={form.key('description')}
          />
        </GridCol>

        <GridCol span={{ base: 12, md: 6, lg: 4 }}>
          <TextInput
            label="Cliente"
            withAsterisk
            {...form.getInputProps('customerId')}
            key={form.key('customerId')}
          />
        </GridCol>

        <GridCol span={{ base: 12, md: 6, lg: 4 }}>
          <TextInput
            label="Advogado"
            withAsterisk
            {...form.getInputProps('lawyerId')}
            key={form.key('lawyerId')}
          />
        </GridCol>

        <GridCol span={{ base: 12, md: 6, lg: 4 }}>
          <TextInput
            label="Advogados envolvidos"
            {...form.getInputProps('coLawyerIds')}
            key={form.key('coLawyerIds')}
          />
        </GridCol>
      </Grid>
    </Stack>
  );
}
