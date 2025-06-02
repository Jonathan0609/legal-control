import DateInputCommon from '@/components/_commons/Inputs/DateInputCommon';
import SelectProcessInstance from '@/components/_commons/Inputs/SelectProcessInstance';
import SelectProcessStatus from '@/components/_commons/Inputs/SelectProcessStatus';
import SelectProcessType from '@/components/_commons/Inputs/SelectProcessType';
import {
  Stack,
  Group,
  Button,
  Grid,
  GridCol,
  TextInput,
  Text,
  ActionIcon,
} from '@mantine/core';
import { IconTrash, IconPlus } from '@tabler/icons-react';
import { useCasesFormContext } from '../CasesFormTabs/form.provider';

export default function ProcessesForm() {
  const form = useCasesFormContext();

  return (
    <Stack gap="xs">
      {form.getValues().processes?.map((_, index) => (
        <Stack key={index} gap="xs">
          <Group justify="space-between">
            <Text fz="xs" c="dimmed" fw={600}>
              Processo {index + 1}
            </Text>

            {index > 0 && (
              <ActionIcon
                variant="light"
                color="red"
                onClick={() => form.removeListItem('processes', index)}
              >
                <IconTrash size={16} />
              </ActionIcon>
            )}
          </Group>

          <Grid gutter="xs">
            <GridCol span={{ base: 12, md: 6, lg: 4 }}>
              <TextInput
                label="Número do processo"
                withAsterisk
                {...form.getInputProps(`processes.${index}.number`)}
                key={form.key(`processes.${index}.number`)}
              />
            </GridCol>

            <GridCol span={{ base: 12, md: 6, lg: 4 }}>
              <TextInput
                label="Vara ou comarca"
                withAsterisk
                {...form.getInputProps(`processes.${index}.jurisdiction`)}
                key={form.key(`processes.${index}.jurisdiction`)}
              />
            </GridCol>

            <GridCol span={{ base: 12, md: 6, lg: 4 }}>
              <TextInput
                label="Nome do juiz"
                {...form.getInputProps(`processes.${index}.judgeName`)}
                key={form.key(`processes.${index}.judgeName`)}
              />
            </GridCol>

            <GridCol span={{ base: 12, md: 6, lg: 4 }}>
              <SelectProcessStatus
                label="Status do processo"
                withAsterisk
                {...form.getInputProps(`processes.${index}.status`)}
                key={form.key(`processes.${index}.status`)}
              />
            </GridCol>

            <GridCol span={{ base: 12, md: 6, lg: 4 }}>
              <TextInput
                label="Tribunal"
                withAsterisk
                {...form.getInputProps(`processes.${index}.court`)}
                key={form.key(`processes.${index}.court`)}
              />
            </GridCol>

            <GridCol span={{ base: 12, md: 6, lg: 4 }}>
              <SelectProcessInstance
                label="Instância"
                withAsterisk
                {...form.getInputProps(`processes.${index}.instance`)}
                key={form.key(`processes.${index}.instance`)}
              />
            </GridCol>

            <GridCol span={{ base: 12, md: 6, lg: 4 }}>
              <SelectProcessInstance
                label="Instância"
                withAsterisk
                {...form.getInputProps(`processes.${index}.instance`)}
                key={form.key(`processes.${index}.instance`)}
              />
            </GridCol>

            <GridCol span={{ base: 12, md: 6, lg: 4 }}>
              <SelectProcessType
                label="Tipo"
                withAsterisk
                {...form.getInputProps(`processes.${index}.type`)}
                key={form.key(`processes.${index}.type`)}
              />
            </GridCol>

            <GridCol span={{ base: 12, md: 6, lg: 4 }}>
              <DateInputCommon
                label="Data de inicio"
                withAsterisk
                {...form.getInputProps(`processes.${index}.startDate`)}
                key={form.key(`processes.${index}.startDate`)}
              />
            </GridCol>

            <GridCol span={{ base: 12, md: 6, lg: 4 }}>
              <DateInputCommon
                label="Data de fim"
                {...form.getInputProps(`processes.${index}.endDate`)}
                key={form.key(`processes.${index}.endDate`)}
              />
            </GridCol>
          </Grid>
        </Stack>
      ))}

      <Group justify="center" mt="md">
        <Button
          variant="light"
          onClick={() =>
            form.insertListItem('processes', {
              number: '',
              jurisdiction: '',
              status: null,
              court: '',
              instance: null,
              type: null,
              startDate: null,
            })
          }
          leftSection={<IconPlus size={16} />}
        >
          Adicionar processo
        </Button>
      </Group>
    </Stack>
  );
}
