import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// Define the base Next.js configuration
const nextConfig: NextConfig = {
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
