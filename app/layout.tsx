import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

import StyledComponentsRegistry from '@/app/lib/registry';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'I am Lucas',
  description: 'Lucas web',
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
