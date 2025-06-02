'use client';

import '@/core/config/dayjs';

export default function RootProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
