import { Card, Grid, GridCol, Group } from '@mantine/core';
import Image from 'next/image';

import legalControlLogo from '../../../../public/legal-control-login-logo.png';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Group align="center" justify="center" h="100vh">
      <Card withBorder p={5} radius="lg" w="100%" maw={1050} bg="gray.0">
        <Grid>
          <GridCol span={6} pb={0}>
            <Image
              style={{ borderRadius: 'var(--mantine-radius-lg)' }}
              src={legalControlLogo}
              alt="Legal Control Logo"
            />
          </GridCol>

          <GridCol
            span={6}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {children}
          </GridCol>
        </Grid>
      </Card>
    </Group>
  );
}
