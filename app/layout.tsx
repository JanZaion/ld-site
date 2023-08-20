import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lucas Site',
  description: 'The glorious site of the glorious Lucas',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
