'use client';

import {
  Button,
  Group,
  Stack,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
} from '@mantine/core';
import {
  IconScaleOutline,
  IconFileDescription,
  IconFileText,
  IconDisc,
  IconAlertCircle,
} from '@tabler/icons-react';
import { ReactNode, useState } from 'react';

import { zodResolver } from '@mantine/form';
import { casesProcessesformValidate } from './form.validate';
import { CasesFormValues, CaseStatus } from './form.types';
import { CasesFormProvider, useCasesForm } from './form.provider';
import CasesForm from '../CasesForm';
import ProcessesForm from '../ProcessesForm';
import DocumentsForm from '../DocumentsForm';

interface Tab {
  value: string;
  label: string;
  icon: ReactNode;
  render: ReactNode;
}

export default function CasesFormTabs() {
  const [activeTab, setActiveTab] = useState<string | null>('case');

  const form = useCasesForm({
    mode: 'controlled',
    validate: zodResolver(casesProcessesformValidate),
    initialValues: {
      title: '',
      type: null,
      customerId: '',
      lawyerId: '',
      coLawyerIds: [],
      status: CaseStatus.Open,
      processes: [
        {
          court: '',
          jurisdiction: '',
          instance: null,
          number: '',
          type: null,
          status: null,
          startDate: null,
        },
      ],
    },
  });

  const tabs: Tab[] = [
    {
      icon: <IconScaleOutline size={12} />,
      label: 'Caso',
      value: 'case',
      render: <CasesForm />,
    },
    {
      icon: <IconFileText size={12} />,
      label: 'Processos',
      value: 'processes',
      render: <ProcessesForm />,
    },
    {
      icon: <IconFileDescription size={12} />,
      label: 'Documentos',
      value: 'documents',
      render: <DocumentsForm />,
    },
  ];

  const handleSubmit = (values: CasesFormValues) => {
    console.log(values);
  };

  const hasErrorsInTab = (tab: string) => {
    const errorKeys = Object.keys(form.errors);

    if (tab === 'case') {
      return errorKeys.some(
        (key) => !key.startsWith('processes.') && !key.startsWith('documents')
      );
    }

    if (tab === 'processes') {
      return errorKeys.some((key) => key.startsWith('processes.'));
    }

    if (tab === 'documents') {
      return errorKeys.some((key) => key.startsWith('documents'));
    }

    return false;
  };

  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      <TabsList>
        {tabs.map((tab) => (
          <TabsTab
            key={tab.value}
            value={tab.value}
            leftSection={tab.icon}
            rightSection={
              hasErrorsInTab(tab.value) ? (
                <IconAlertCircle size={16} color="red" />
              ) : null
            }
          >
            {tab.label}
          </TabsTab>
        ))}
      </TabsList>

      <CasesFormProvider form={form}>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            {tabs.map((tab) => (
              <TabsPanel key={tab.value} value={tab.value} pt="xs">
                {tab.render}
              </TabsPanel>
            ))}

            <Group justify="end">
              <Button
                variant="light"
                type="submit"
                leftSection={<IconDisc size={18} />}
              >
                Salvar
              </Button>
            </Group>
          </Stack>
        </form>
      </CasesFormProvider>
    </Tabs>
  );
}
