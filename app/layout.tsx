import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { Burger } from './components/burger/Burger';
import { Header } from './components/header/Header';
import { MainContainer } from './components/mainContainer/MainContainer';

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
        <Burger />
        <MainContainer>
          <Header />
          {children}
          <div />
        </MainContainer>
      </body>
    </html>
  );
};

export default RootLayout;
