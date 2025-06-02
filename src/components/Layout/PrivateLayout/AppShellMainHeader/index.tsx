'use client';

import {
  Burger,
  Card,
  Grid,
  GridCol,
  Group,
  TextInput,
  ThemeIcon,
  useMantineColorScheme,
} from '@mantine/core';
import { IconMoonStars, IconSearch, IconSunHigh } from '@tabler/icons-react';
import UserAvatar from './UserAvatar';

interface Props {
  opened: boolean;
  toggle: () => void;
}

export default function AppShellMainHeader(props: Props) {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const isDark = colorScheme === 'dark';

  return (
    <Card shadow="sm" radius="md" p="sm">
      <Grid align="center">
        <GridCol span="auto">
          <Burger
            opened={props.opened}
            onClick={props.toggle}
            hiddenFrom="sm"
            size="sm"
          />

          <TextInput
            leftSection={<IconSearch size={18} />}
            radius="lg"
            placeholder="Buscar por número do processo, cliente, etc."
          />
        </GridCol>

        <GridCol span="content">
          <Group gap="md">
            <UserAvatar />

            <ThemeIcon
              onClick={() => setColorScheme(isDark ? 'light' : 'dark')}
              variant="light"
              size="md"
              radius="xl"
              style={{ cursor: 'pointer' }}
              p={4}
            >
              {!isDark ? <IconSunHigh /> : <IconMoonStars />}
            </ThemeIcon>
          </Group>
        </GridCol>
      </Grid>
    </Card>
  );
}
