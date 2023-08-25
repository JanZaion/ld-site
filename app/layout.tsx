import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { Burger } from './components/burger/Burger';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';

export const metadata: Metadata = {
  title: 'Lucas Site',
  description: 'The glorious site of the glorious Lucas',
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <Burger />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
