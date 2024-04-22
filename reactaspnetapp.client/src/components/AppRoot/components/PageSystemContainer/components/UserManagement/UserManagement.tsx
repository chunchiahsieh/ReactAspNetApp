import styles from './UserManagement.module.scss';

export interface UserManagementProps {
  prop?: string;
}

export function UserManagement({prop = 'default value'}: UserManagementProps) {
  return <div className={styles.UserManagement}>UserManagement {prop}</div>;
}
