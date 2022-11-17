import React from 'react';
import SelectCheckbox from './SelectCheckbox';

export default {
  title: 'SelectCheckbox',
  component: SelectCheckbox,
};

const Template = (args) => <SelectCheckbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Navbarr',
};
