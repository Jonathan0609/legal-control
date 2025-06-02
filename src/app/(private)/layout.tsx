import PrivateLayout from '@/components/Layout/PrivateLayout';

export default function AppPrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PrivateLayout>{children}</PrivateLayout>;
}
