import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const twitters = [
  {
    title: 'React on my mind',
    twitterName: 'p4tr0l',
    content: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.',
    created: '1 day',
  },
  {
    title: 'Wish you Nice!',
    twitterName: 'p4tr0l',
    content: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.',
    created: '3 days',
  },
  {
    title: 'Why so React?',
    twitterName: 'p4tr0l',
    content: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.',
    created: '7 days',
  },
  {
    title: 'React or Vue?',
    twitterName: 'p4tr0l',
    content: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.',
    created: '1 day',
  },
  {
    title: 'Vanilla JS is for boomers',
    twitterName: 'p4tr0l',
    content: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.',
    created: '2 days',
  },
  {
    title: 'You can be even better!',
    twitterName: 'p4tr0l',
    content: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.',
    created: '1 day',
  },
]

const Twitters = () => (
  <GridTemplate pageType="twitter">
    {twitters.map(item => (
      <Card
        cardType="twitter"
        key={item.title}
        {...item} />
    ))};
  </GridTemplate>
);

export default Twitters;
