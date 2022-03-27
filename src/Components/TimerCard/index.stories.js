import React from 'react';
import TimerCard from './index';

export default {
  title: 'Timer/TimerCard',
  component: TimerCard
};

const Template = (args) => <TimerCard {...args} />;

export const Style1 = Template.bind({})
Style1.args = {
  seconds: 40,
  totalSeconds: 60,
  type: 1
}

export const Style2 = Template.bind({})
Style2.args = {
  seconds: 50,
  totalSeconds: 60,
  type: 2
}