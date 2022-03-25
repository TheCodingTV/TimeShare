import React from 'react';
import CardSelect from './index';

export default {
  title: 'General/CardSelect',
  component: CardSelect
};

const Template = (args) => <CardSelect {...args} />

export const Default = Template.bind({})
Default.args = {
  selected: false,
  title: 'Title',
  description: 'description description description'
}

export const Selected = Template.bind({})
Selected.args = {
  selected: true,
  title: 'Title',
  description: 'description description description'
}