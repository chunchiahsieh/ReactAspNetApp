import styles from './PageOGHGContainer.module.scss';

export interface PageOGHGContainerProps {
  prop?: string;
}

export function PageOGHGContainer({prop = 'default value'}: PageOGHGContainerProps) {
  return <div className={styles.PageOGHGContainer}>PageOGHGContainer {prop}</div>;
}
