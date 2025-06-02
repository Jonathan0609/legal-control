import { Card, Stack, Group, Badge, Text } from '@mantine/core';
import dayjs from 'dayjs';
import { ReactNode } from 'react';

interface Props {
  cardHeader: ReactNode;
  data: { id: number; description: string; date: string }[];
}

export default function InformativeCardList(props: Props) {
  return (
    <Card shadow="sm" radius="md" p="lg" mih={250} withBorder>
      <Stack gap="md">
        {props.cardHeader}

        <Stack gap="sm">
          {props.data.map((item) => (
            <Group key={item.id} justify="space-between">
              <Text size="sm">{item.description}</Text>

              <Badge
                color={dayjs().isSame(item.date, 'day') ? 'red' : 'blue'}
                variant="light"
              >
                {dayjs(item.date).format('D/MMM - H:mm')}
              </Badge>
            </Group>
          ))}
        </Stack>
      </Stack>
    </Card>
  );
}
