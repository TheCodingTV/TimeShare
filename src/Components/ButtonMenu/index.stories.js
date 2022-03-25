import React from 'react';
import ButtonMenu from './index';

export default {
  title: 'General/ButtonMenu',
  component: ButtonMenu
};

const Template = (args) => <ButtonMenu {...args} />;

export const Default = Template.bind({})
Default.args = {
  text: 'Section 1'
}

export const Active = Template.bind({})
Active.args = {
  text: 'Section 2',
  active: true
}