import {
  TypeOfRelationship,
  typeOfRelationshipLabel,
} from '@/components/Customers/CustomersForm';
import { Select, SelectProps } from '@mantine/core';

export default function SelectTypeOfRelationship(
  props: Omit<SelectProps, 'data'>
) {
  return (
    <Select
      data={Object.values(TypeOfRelationship).map((typeOfRelationship) => ({
        label: typeOfRelationshipLabel[typeOfRelationship],
        value: typeOfRelationship,
      }))}
      {...props}
    />
  );
}
