import {
  MaritalStatus,
  maritalStatusLabel,
} from '@/components/Customers/CustomersForm';
import { Select, SelectProps } from '@mantine/core';

export default function SelectMaritalStatus(props: Omit<SelectProps, 'data'>) {
  return (
    <Select
      data={Object.values(MaritalStatus).map((maritalStatus) => ({
        label: maritalStatusLabel[maritalStatus],
        value: maritalStatus,
      }))}
      {...props}
      label="Estado civil"
    />
  );
}
