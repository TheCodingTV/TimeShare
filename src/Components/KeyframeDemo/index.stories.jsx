import React from 'react';
import KeyframeDemo from './index';

export default {
  title: 'Demo/KeyframeDemo',
  component: KeyframeDemo
};

const Template = (args) => (
  <div className='center'>
    <KeyframeDemo {...args} />
  </div>
);

export const Simple = Template.bind({});
Simple.args = {
}
