import {
  CaseType,
  caseTypeLabel,
} from '@/components/Cases/CasesFormTabs/form.types';
import { Select, SelectProps } from '@mantine/core';

export default function SelectCaseType(props: Omit<SelectProps, 'data'>) {
  return (
    <Select
      data={Object.values(CaseType).map((caseType) => ({
        label: caseTypeLabel[caseType],
        value: caseType,
      }))}
      {...props}
    />
  );
}
