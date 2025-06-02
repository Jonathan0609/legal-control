import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      '@mantine/charts',
      '@mantine/core',
      '@mantine/dates',
      '@mantine/dropzone',
      '@mantine/form',
      '@mantine/hooks',
      '@mantine/modals',
      '@mantine/notifications',
      '@tabler/icons-react',
      '@tiptap/extension-link',
      '@tiptap/pm',
      '@tiptap/react',
      '@tiptap/starter-kit',
    ],
  },
};

export default nextConfig;

