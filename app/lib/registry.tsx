'use client';

import { useServerInsertedHTML } from 'next/navigation';
import { useState } from 'react';
import type { ReactNode } from 'react';
import {
  ThemeProvider,
  ServerStyleSheet,
  StyleSheetManager,
} from 'styled-components';

import GlobalStyles from '@/app/styles/globals';
import { defaultTheme } from '@/app/themes/default';

const StyledComponentsRegistry = ({ children }: { children: ReactNode }) => {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return styles;
  });

  if (typeof window !== 'undefined') return children;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <ThemeProvider theme={defaultTheme}>
        <>
          <GlobalStyles />
          {children}
        </>
      </ThemeProvider>
    </StyleSheetManager>
  );
};

export default StyledComponentsRegistry;
