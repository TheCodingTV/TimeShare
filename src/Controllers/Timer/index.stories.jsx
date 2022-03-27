import React from 'react';
import Timer from './index';

export default {
  title: 'Timer/Timer',
  component: Timer
};

const Template = (args) => <Timer {...args} />;

export const RowOne = Template.bind({});
RowOne.args = {
  config: [
    { id: 1, totalSeconds: 120 }
  ]
}

export const RowTwo = Template.bind({});
RowTwo.args = {
  config: [
    { id: 1, totalSeconds: 120, colorType: 1 },
    { id: 2, totalSeconds: 240, colorType: 2 }
  ]
}

export const CardOne = Template.bind({});
CardOne.args = {
  config: [
    { id: 1, totalSeconds: 120, componentType: 'card' }
  ]
}

export const CardTwo = Template.bind({});
CardTwo.args = {
  config: [
    { id: 1, totalSeconds: 120, componentType: 'card' },
    { id: 2, totalSeconds: 120, componentType: 'card', colorType: 2 }
  ]
}

