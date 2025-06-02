import {
  IconDashboard,
  IconFileText,
  IconListCheck,
  IconUser,
} from '@tabler/icons-react';
import { ReactNode } from 'react';

interface Route {
  label: string;
  description?: string;
  icon: ReactNode;
  key: string;
  href: string;
}

export const routes: Route[] = [
  {
    label: 'Dashboard',
    key: 'dashboard',
    icon: <IconDashboard size={18} />,
    href: '/dashboard',
  },
  {
    label: 'Clientes',
    key: 'customers',
    icon: <IconUser size={18} />,
    href: '/customers',
  },
  {
    label: 'Casos & Processos',
    key: 'cases-processes',
    icon: <IconFileText size={18} />,
    href: '/cases-processes',
  },
  {
    label: 'Tarefas',
    key: 'tasks',
    icon: <IconListCheck size={18} />,
    href: '/tasks',
  },
];
