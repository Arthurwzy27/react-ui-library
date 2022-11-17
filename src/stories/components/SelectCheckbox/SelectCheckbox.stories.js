import React from 'react';
import SelectCheckbox from './SelectCheckbox';

export default {
  title: 'SelectCheckbox',
  component: SelectCheckbox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = (args) => <SelectCheckbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const Secondary = Template.bind({});
Secondary.args = {
};

export const Large = Template.bind({});
Large.args = {
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Navbarr',
};
