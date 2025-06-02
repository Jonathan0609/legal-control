'use client';

import InformativeCardList from '@/components/_commons/InformativeCardList';
import InformativeCards from '@/components/Dashboard/InformativeCards';
import { Button, Grid, GridCol, Stack, Text } from '@mantine/core';
import { useSession } from 'next-auth/react';

export default function DashboardPage() {
  const session = useSession();

  console.log(session);

  return (
    <Stack>
      <InformativeCards />

      <Grid>
        <GridCol span={{ base: 12, xl: 6 }}>
          <InformativeCardList
            cardHeader={
              <Grid>
                <GridCol span="auto">
                  <Text fw={600} size="lg">
                    📌 Tarefas do Dia
                  </Text>
                </GridCol>

                <GridCol span="content">
                  <Button variant="subtle" size="xs">
                    Ver todas
                  </Button>
                </GridCol>
              </Grid>
            }
            data={[
              {
                id: 1,
                description: 'Audiência - Caso João Silva',
                date: '2025-05-29T19:57:45.632897',
              },
              {
                id: 2,
                description: 'Redigir petição - Processo 4589',
                date: '2025-05-29T19:57:45.632897',
              },
              {
                id: 3,
                description: 'Enviar contrato revisado - Cliente Maria',
                date: '2025-05-30T19:57:45.632897',
              },
            ]}
          />
        </GridCol>

        <GridCol span={{ base: 12, xl: 6 }}>
          <InformativeCardList
            cardHeader={
              <Grid>
                <GridCol span="auto">
                  <Text fw={600} size="lg">
                    ⏰ Prazos Próximos
                  </Text>
                </GridCol>

                <GridCol span="content">
                  <Button variant="subtle" size="xs">
                    Ver todos
                  </Button>
                </GridCol>
              </Grid>
            }
            data={[
              {
                id: 1,
                description: 'Resposta ao juiz – Proc. 1294',
                date: '2025-05-29T19:57:45.632897',
              },
              {
                id: 2,
                description: 'Protocolo petição – Caso Silva',
                date: '2025-05-29T19:57:45.632897',
              },
              {
                id: 3,
                description: 'Audiência – Proc. 8792',
                date: '2025-05-29T19:57:45.632897',
              },
            ]}
          />
        </GridCol>
      </Grid>
    </Stack>
  );
}
