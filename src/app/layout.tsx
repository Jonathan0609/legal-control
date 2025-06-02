import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';

import './globals.css';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';

import { theme } from '@/core/config/Mantine/theme';
import { Notifications } from '@mantine/notifications';
import { DatesProvider } from '@mantine/dates';

export const montserrat = Montserrat({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Legal Control',
};

import '@/core/config/dayjs';
import RootProviders from '@/core/providers/RootProviders';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>

      <body className={montserrat.className}>
        <MantineProvider theme={theme}>
          <Notifications position="bottom-left" autoClose={4000} />

          <DatesProvider settings={{ locale: 'pt-BR', firstDayOfWeek: 0 }}>
            <ModalsProvider>
              <RootProviders>{children}</RootProviders>
            </ModalsProvider>
          </DatesProvider>
        </MantineProvider>
      </body>
    </html>
  );
}

