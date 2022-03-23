import React from 'react';
import Timer from './index';

export default {
  title: 'Timer/Timer',
  component: Timer
};

const Template = (args) => <Timer {...args} />;

export const One = Template.bind({});
One.args = {
  config: [
    { id: 1, totalSeconds: 120 }
  ]
}

export const Two = Template.bind({});
Two.args = {
  config: [
    { id: 1, totalSeconds: 120 },
    { id: 2, totalSeconds: 240, type: 'secondary' }
  ]
}
