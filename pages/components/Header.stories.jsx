import React from 'react';

import Header  from './Header.component';

export default {
  title: 'ALA-Labs/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
