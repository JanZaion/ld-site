import type { ReactNode } from 'react';

import styles from './MainContainer.module.css';

type MainContainerProps = {
  children: ReactNode;
};

export const MainContainer = ({ children }: MainContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};
