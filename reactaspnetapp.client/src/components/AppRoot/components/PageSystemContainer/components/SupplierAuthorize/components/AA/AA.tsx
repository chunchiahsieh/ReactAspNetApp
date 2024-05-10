import React from 'react';

import styles from './AA.css';

export interface AAProps {
  prop?: string;
}

export function AA({prop = 'default value'}: AAProps) {
  return <div >AA {prop}</div>;
}
