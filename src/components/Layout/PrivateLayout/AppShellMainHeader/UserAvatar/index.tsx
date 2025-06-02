import {
  Avatar,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuLabel,
  MenuTarget,
} from '@mantine/core';
import {
  IconSettings,
  IconUserCircle,
  IconMessageDots,
  IconHelpCircle,
  IconLogout,
} from '@tabler/icons-react';
import Link from 'next/link';

interface User {
  id: number;
  name: string;
}

export const mock: User = {
  id: 1,
  name: 'Jonathan Cristian',
};

export default function UserAvatar() {
  return (
    <Menu shadow="md" width={200}>
      <MenuTarget>
        <Avatar
          style={{ cursor: 'pointer' }}
          name={mock.name}
          color="initials"
        />
      </MenuTarget>

      <MenuDropdown>
        <MenuLabel>Aplicação</MenuLabel>

        <MenuItem leftSection={<IconUserCircle size={14} />}>
          Meu perfil
        </MenuItem>

        <MenuItem leftSection={<IconSettings size={14} />}>
          Configurações
        </MenuItem>

        <MenuItem leftSection={<IconMessageDots size={14} />}>
          Mensagens
        </MenuItem>

        <MenuItem leftSection={<IconHelpCircle size={14} />}>Ajuda</MenuItem>

        <MenuItem
          leftSection={<IconLogout size={14} color="red" />}
          c="red"
          component={Link}
          href="/auth/login"
        >
          Sair
        </MenuItem>
      </MenuDropdown>
    </Menu>
  );
}
