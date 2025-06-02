import { ActionIcon, ActionIconProps } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';

interface Props extends Omit<ActionIconProps, 'variant' | 'children' | 'size'> {
  href: string;
}

export default function ActionIconRedirect(props: Props) {
  return (
    <ActionIcon
      variant="default"
      size="sm"
      {...props}
      renderRoot={(actionIconProps) => <Link {...actionIconProps} />}
    >
      <IconArrowRight />
    </ActionIcon>
  );
}
