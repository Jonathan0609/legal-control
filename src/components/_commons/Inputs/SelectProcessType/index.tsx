import {
  ProcessType,
  processTypeLabel,
} from '@/components/Cases/CasesFormTabs/form.types';
import { Select, SelectProps } from '@mantine/core';

export default function SelectProcessType(props: Omit<SelectProps, 'data'>) {
  return (
    <Select
      data={Object.values(ProcessType).map((processType) => ({
        label: processTypeLabel[processType],
        value: processType,
      }))}
      {...props}
    />
  );
}
