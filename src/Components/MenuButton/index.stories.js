import React from 'react';
import MenuButton from './index';

export default {
  title: 'General/MenuButton',
  component: MenuButton
};

const Template = (args) => <MenuButton {...args} />;

export const Default = Template.bind({})
Default.args = {
  text: 'Section 1'
}

export const Active = Template.bind({})
Active.args = {
  text: 'Section 2',
  active: true
}