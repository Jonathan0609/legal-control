import { Button, ButtonProps, PolymorphicComponentProps } from '@mantine/core';

export default function ButtonPrimary(
  props: PolymorphicComponentProps<
    'button',
    Omit<ButtonProps, 'variant' | 'gradient'>
  >
) {
  return (
    <Button
      variant="gradient"
      gradient={{ from: 'dark.7', to: 'blue-primary.7' }}
      {...props}
    />
  );
}
