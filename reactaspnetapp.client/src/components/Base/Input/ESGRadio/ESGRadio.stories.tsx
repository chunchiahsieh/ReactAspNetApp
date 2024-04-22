import type {Meta, StoryObj} from '@storybook/react';

import {ESGRadio} from './ESGRadio';
// import { RadioGroup } from '@mui/material';
// import { useState } from 'react';

const meta: Meta<typeof ESGRadio> = {
  component: ESGRadio,
};
export default meta;

// const meta2: Meta<typeof ESGRadioGroupTest> = {
//   component: ESGRadioGroupTest,
// };
// export default meta2;

type Story = StoryObj<typeof ESGRadio>;

export const Basic: Story = {args: {
  sizeRadio: 322,
  disabled: false,
  key: 'basic',
}};

export const DisabledSel: Story = {args: {
  checked: true,
  sizeRadio: 322,
  disabled: true,
  key: 'disabledSel',
}};

export const Disabled: Story = {args: {
  sizeRadio: 322,
  disabled: true,
  key: 'disabled',
}};


// function ESGRadioGroupTest() {
//   const values = [1, 2, 3];
//   const [selectedValue, setSelectedValue] = useState(values[0]);

//   return (
//     <RadioGroup row>
//       {values.map((value) => (
//         <ESGRadio
//           key={value}
//           value={value}
//           sizeRadio={32}
//           disabled={false}
//           checked={selectedValue === value}
//           onChange={(_, checked) => {
//             if (checked) {
//               setSelectedValue(value);
//               console.log('selectedValue:', value);
//             }
//           }}
//         />
//       ))}
//     </RadioGroup>
//   );
// }

// type StoryTest = StoryObj<typeof ESGRadioGroupTest>;

// export const ESGRadioGroup: StoryTest = {args: {
// }};
