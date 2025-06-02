import { DateInput, DateInputProps } from '@mantine/dates';

export default function DateInputCommon(props: DateInputProps) {
  return <DateInput valueFormat="DD/MM/YYYY" {...props} />;
}
