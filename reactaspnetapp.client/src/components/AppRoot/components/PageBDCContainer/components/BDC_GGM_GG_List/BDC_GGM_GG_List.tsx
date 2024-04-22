import React from 'react';

import styles from './BDC_GGM_GG_List.module.scss';
import { Box } from '@mui/material';
import { ESGTable, ESGTabsPanel } from 'components';

export interface BDC_GGM_GG_ListProps {
  prop?: string;
}

export function BDC_GGM_GG_List({prop = 'default value'}: BDC_GGM_GG_ListProps) {
  return (
    <Box sx={{width:"100%", height:"100%"}}>
      <ESGTable rows={[]} header={[]} />
    </Box>
  );
}
