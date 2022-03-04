import React from 'react';
import TimerMultiple from './index';

export default {
  title: 'Timer/TimerMultiple',
  component: TimerMultiple
};

const Template = (args) => <TimerMultiple {...args} />;

export const TwoSides = Template.bind({});
TwoSides.args = {
  cover:'https://images.unsplash.com/photo-1645193584649-570f8f1eaddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  config: [
    { id: 1, totalSeconds: 120, title: '正方', color: '#364fc7' },
    { id: 2, totalSeconds: 240, title: '反方', color: '#0b7285' }
  ]
}

export const ThreeSides = Template.bind({});
ThreeSides.args = {
  cover:'https://images.unsplash.com/photo-1645193584649-570f8f1eaddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  config: [
    { id: 1, totalSeconds: 120, title: '正方', color: '#364fc7' },
    { id: 2, totalSeconds: 240, title: '反方', color: '#0b7285' },
    { id: 3, totalSeconds: 240, title: '反方', color: '#a61e4d' }
  ]
}
