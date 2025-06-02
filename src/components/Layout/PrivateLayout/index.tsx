'use client';

import {
  AppShell,
  AppShellMain,
  AppShellNavbar,
  Box,
  Card,
  Stack,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import AppShellMainHeader from './AppShellMainHeader';
import NavLinkRoutes from './NavLinkRoutes';

import classes from './styles.module.css';

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      navbar={{
        width: 250,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      classNames={classes}
    >
      <AppShellNavbar p="md">
        <Stack gap="md">
          <Text>Logo</Text>

          <NavLinkRoutes toggle={toggle} />
        </Stack>
      </AppShellNavbar>

      <AppShellMain>
        <Box px={{ base: 0, lg: 'sm' }} w="100%">
          <Stack gap="lg">
            <AppShellMainHeader opened={opened} toggle={toggle} />

            <Card shadow="sm" radius="md">
              {children}
            </Card>
          </Stack>
        </Box>
      </AppShellMain>
    </AppShell>
  );
}
