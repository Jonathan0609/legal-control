import { Button, ButtonProps, ElementProps } from '@mantine/core';
import Link from 'next/link';

interface Props
  extends ButtonProps,
    ElementProps<typeof Link, keyof ButtonProps> {}

export default function ButtonLink(props: Props) {
  return <Button component={Link} {...props} />;
}
