import React from 'react';
import SVGDemo from './index';

export default {
  title: 'Demo/SVGDemo',
  component: SVGDemo
};

const Template = (args) => (
  <div className='center'>
    <SVGDemo {...args} />
  </div>
);

export const SimpleSVG = Template.bind({});
SVGDemo.args = {
}
