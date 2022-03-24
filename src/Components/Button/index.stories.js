import React from 'react';
import Button from './index';

export default {
  title: 'General/Button',
  component: Button
};

const Template = (args) => <>
  <Button {...args} size='s'>Size S</Button>
  <Button {...args} size='m'>Size M</Button>
  <Button {...args} size='l'>Size L</Button>
</>

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
  type: 'secondary'
}