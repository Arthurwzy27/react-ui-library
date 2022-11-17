import React from 'react';
import Accordion from './Accordion';

export default {
  title: 'Accordion',
  component: Accordion,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Accordion {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
