import {
  ProcessInstance,
  processInstanceLabel,
} from '@/components/Cases/CasesFormTabs/form.types';
import { Select, SelectProps } from '@mantine/core';

export default function SelectProcessInstance(
  props: Omit<SelectProps, 'data'>
) {
  return (
    <Select
      data={Object.values(ProcessInstance).map((processInstance) => ({
        label: processInstanceLabel[processInstance],
        value: processInstance,
      }))}
      {...props}
    />
  );
}
