import React from 'react';
import TimerMultiple from './index';

export default {
  title: 'Timer/TimerMultiple',
  component: TimerMultiple
};

const Template = (args) => <TimerMultiple {...args} />;

export const OneSide = Template.bind({});
OneSide.args = {
  config: [
    { id: 1, totalSeconds: 120 }
  ]
}

export const TwoSides = Template.bind({});
TwoSides.args = {
  config: [
    { id: 1, totalSeconds: 120 },
    { id: 2, totalSeconds: 240 }
  ]
}
