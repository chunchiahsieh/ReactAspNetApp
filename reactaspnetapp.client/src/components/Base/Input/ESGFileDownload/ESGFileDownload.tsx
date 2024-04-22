import styles from './ESGFileDownload.module.scss';

export interface ESGFileDownloadProps {
  prop?: string;
}

export function ESGFileDownload({prop = 'default value'}: ESGFileDownloadProps) {
  return <div className={styles.ESGFileDownload}>ESGFileDownload {prop}</div>;
}
