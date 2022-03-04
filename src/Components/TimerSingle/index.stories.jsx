import React from 'react';
import TimerSingle from './index';

export default {
  title: 'Timer/TimerSingle',
  component: TimerSingle,
  argTypes: {
    color: { control: 'color' },
  },
};

const Template = (args) => <TimerSingle {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  totalSeconds: 240
}

export const WithCover = Template.bind({});
WithCover.args = {
  totalSeconds: 240,
  cover: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
}

export const WithTitle = Template.bind({});
WithTitle.args = {
  title: 'Yoga Section 1',
  totalSeconds: 240,
  cover: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
}