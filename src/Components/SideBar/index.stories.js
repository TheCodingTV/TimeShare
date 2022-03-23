import React from 'react';
import SideBar from './index';

export default {
  title: 'SideBar/SideBar',
  component: SideBar
};

const Template = (args) => <SideBar {...args} />;

export const Default = Template.bind({})
Default.args = {}
