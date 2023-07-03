import { FC, ReactNode } from 'react';
import styles from './PageWrapper.module.scss';

interface PageWrapperProps {
  className: string;
  children: ReactNode;
}

export const PageWrapper: FC<PageWrapperProps> = (props) => {
  const { children, className } = props;

  return (
    <div className={className}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};
