import { Avatar} from '@mui/material';

export interface CircleAnIconProps {
  icon?: any;
}


export function CircleAnIcon({icon=null}: CircleAnIconProps) {
  return <Avatar sx={{
    color: 'black',
    border: `2px solid black`,
    backgroundColor: 'white',
  }}>{icon}</Avatar>;
}
