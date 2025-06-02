import { routes } from '@/core/constants/routes';
import { NavLink, Stack } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import classes from './styles.module.css';

interface Props {
  toggle: () => void;
}

export default function NavLinkRoutes(props: Props) {
  const pathname = usePathname();

  return (
    <Stack gap="8">
      {routes.map((route) => (
        <NavLink
          key={route.key}
          label={route.label}
          leftSection={route.icon}
          component={Link}
          href={route.href}
          active={pathname.includes(route.key)}
          onClick={props.toggle}
          classNames={classes}
        />
      ))}
    </Stack>
  );
}
