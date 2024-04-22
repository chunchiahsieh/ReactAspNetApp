import styles from './PersonalSetting.module.scss';

export interface PersonalSettingProps {
  prop?: string;
}

export function PersonalSetting({prop = 'default value'}: PersonalSettingProps) {
  return <div className={styles.PersonalSetting}>PersonalSetting {prop}</div>;
}
