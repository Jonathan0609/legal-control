import InformativeCard from '@/components/_commons/InformativeCard';
import { Grid, GridCol } from '@mantine/core';

export default function InformativeCards() {
  return (
    <Grid>
      <GridCol span={{ sm: 12, lg: 3 }}>
        <InformativeCard
          title="Casos ativos"
          helpContent="Total de casos jurídicos que estão em andamento e ainda não foram encerrados pelo escritório."
          color="blue"
        >
          10
        </InformativeCard>
      </GridCol>

      <GridCol span={{ sm: 12, lg: 3 }}>
        <InformativeCard
          title="Casos fechados"
          helpContent="Total de casos que já foram concluídos, encerrados judicial ou extrajudicialmente."
          color="green"
        >
          5
        </InformativeCard>
      </GridCol>

      <GridCol span={{ sm: 12, lg: 3 }}>
        <InformativeCard
          title="Processos em andamento"
          helpContent="Número de processos judiciais vinculados aos casos ativos que estão atualmente em tramitação no sistema judiciário."
        >
          3
        </InformativeCard>
      </GridCol>

      <GridCol span={{ sm: 12, lg: 3 }}>
        <InformativeCard
          title="Casos sem movimentação recente"
          helpContent="Casos ativos que não registraram nenhuma movimentação processual ou atualização significativa nos últimos 30 dias"
        >
          3
        </InformativeCard>
      </GridCol>
    </Grid>
  );
}
