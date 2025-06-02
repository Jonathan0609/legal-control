import {
  ActionIcon,
  Card,
  CardProps,
  Grid,
  GridCol,
  MantineColor,
  Stack,
  Text,
  Tooltip,
} from '@mantine/core';
import { IconHelp } from '@tabler/icons-react';

interface Props extends Omit<CardProps, 'title'> {
  title: string;
  color?: MantineColor;
  helpContent?: string;
}

export default function InformativeCard({
  helpContent,
  color,
  title,
  ...props
}: Props) {
  return (
    <Card shadow="xs" p="lg" withBorder {...props}>
      <Stack gap={0}>
        <Grid>
          <GridCol span="auto">
            <Text fz="sm" fw={600} c="dimmed" lh={1}>
              {title}
            </Text>
          </GridCol>

          {helpContent && (
            <GridCol span="content">
              <Tooltip
                label={helpContent}
                multiline
                w={200}
                color="blue-primary"
                withArrow
              >
                <ActionIcon variant="subtle" color="gray" size="sm">
                  <IconHelp size={16} />
                </ActionIcon>
              </Tooltip>
            </GridCol>
          )}
        </Grid>

        <Text fz="md" fw={600} lh={1} c={color}>
          {props.children}
        </Text>
      </Stack>
    </Card>
  );
}
