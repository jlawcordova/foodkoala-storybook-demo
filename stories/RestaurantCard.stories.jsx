import React from 'react';

import RestaurantCard from '../components/restaurant-card';

export default {
  title: 'Restaurant/Card',
  component: RestaurantCard,
};

const Template = (args) => <RestaurantCard {...args} />;

export const Card = Template.bind({});
Card.args = {
  name: 'The Fat Cow',
  description: 'It is really phat.',
  image: 'https://i0.wp.com/stage.thefatcowgroup.com/wp-content/uploads/2021/09/6-1.png?w=800&ssl=1',
};
