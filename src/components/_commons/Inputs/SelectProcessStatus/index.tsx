import {
  ProcessStatus,
  processStatusLabel,
} from '@/components/Cases/CasesFormTabs/form.types';
import { Select, SelectProps } from '@mantine/core';

export default function SelectProcessStatus(props: Omit<SelectProps, 'data'>) {
  return (
    <Select
      data={Object.values(ProcessStatus).map((processStatus) => ({
        label: processStatusLabel[processStatus],
        value: processStatus,
      }))}
      {...props}
    />
  );
}
