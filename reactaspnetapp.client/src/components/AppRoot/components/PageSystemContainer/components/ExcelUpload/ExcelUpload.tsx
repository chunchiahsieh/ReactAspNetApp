import styles from './ExcelUpload.module.scss';

export interface ExcelUploadProps {
  prop?: string;
}

export function ExcelUpload({prop = 'default value'}: ExcelUploadProps) {
  return <div className={styles.ExcelUpload}>ExcelUpload {prop}</div>;
}
