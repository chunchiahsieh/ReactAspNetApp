import styles from './PagePCFContainer.module.scss';

export interface PagePCFContainerProps {
  prop?: string;
}

export function PagePCFContainer({prop = 'default value'}: PagePCFContainerProps) {
  return <div className={styles.PagePCFContainer}>PagePCFContainer {prop}</div>;
}
