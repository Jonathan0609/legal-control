import { Grid, GridCol } from '@mantine/core';
import TitlePage from '../TitlePage';
import ButtonLink from '../Buttons/ButtonLink/index.';
import { IconPlus } from '@tabler/icons-react';

interface Props {
  titlePage: string;
  buttonLabel: string;
  href: string;
}

export default function HeaderPage(props: Props) {
  return (
    <Grid>
      <GridCol span={{ base: 12, sm: 'auto' }}>
        <TitlePage>{props.titlePage}</TitlePage>
      </GridCol>

      <GridCol span={{ base: 'auto', xs: 'content' }}>
        <ButtonLink
          variant="light"
          leftSection={<IconPlus size={18} />}
          href={props.href}
        >
          {props.buttonLabel}
        </ButtonLink>
      </GridCol>
    </Grid>
  );
}
