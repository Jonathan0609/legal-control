import {
  Card,
  Table,
  TableThead,
  TableTr,
  TableTh,
  TableTbody,
  TableTd,
  TableScrollContainer,
} from '@mantine/core';
import { CSSProperties, ReactNode } from 'react';

import classes from './style.module.css';

interface TableColumn<T> {
  key?: keyof T;
  label: string;
  width?: CSSProperties['width'];
  render?: (item: T) => ReactNode;
}

interface TableCommonProps<G> {
  data?: G[];
  columns: TableColumn<G>[];
}

export default function TableCommon<T>(props: TableCommonProps<T>) {
  const columns = props.columns;
  const data = props.data;

  return (
    <Card withBorder p={0}>
      <TableScrollContainer
        minWidth="max-content"
        className={classes.scrollContainer}
      >
        <Table striped highlightOnHover withColumnBorders w="100%">
          <TableThead>
            <TableTr>
              {columns.map((column, index) => (
                <TableTh key={index}>{column.label}</TableTh>
              ))}
            </TableTr>
          </TableThead>

          <TableTbody>
            {!!data && (
              <>
                {data.map((row, index) => (
                  <TableTr key={index}>
                    {columns.map((column, index) => (
                      <TableTd key={index} style={{ width: column.width }}>
                        {!column.render
                          ? (row[column.key as keyof typeof row] as string)
                          : column.render(row)}
                      </TableTd>
                    ))}
                  </TableTr>
                ))}
              </>
            )}
          </TableTbody>
        </Table>
      </TableScrollContainer>
    </Card>
  );
}
