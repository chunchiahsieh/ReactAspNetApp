import { TestAPI } from 'stories/TestAPI';
import styles from './RoleAuthorize.module.scss';

export interface RoleAuthorizeProps {
  prop?: string;
}

export function RoleAuthorize({prop = 'default value'}: RoleAuthorizeProps) {
  return <TestAPI />;
}
