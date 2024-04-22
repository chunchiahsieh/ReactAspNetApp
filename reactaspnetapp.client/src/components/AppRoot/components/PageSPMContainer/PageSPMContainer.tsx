import styles from './PageSPMContainer.module.scss';

export interface PageSPMContainerProps {
  prop?: string;
}

export function PageSPMContainer({prop = 'default value'}: PageSPMContainerProps) {
  return <div className={styles.PageSPMContainer}>PageSPMContainer {prop}</div>;
}
