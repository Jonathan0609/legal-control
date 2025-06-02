import {
  CaseStatus,
  caseStatusLabel,
} from '@/components/Cases/CasesFormTabs/form.types';
import { Select, SelectProps } from '@mantine/core';

export default function SelectCaseStatus(props: Omit<SelectProps, 'data'>) {
  return (
    <Select
      data={Object.values(CaseStatus).map((caseStatus) => ({
        label: caseStatusLabel[caseStatus],
        value: caseStatus,
      }))}
      {...props}
    />
  );
}
