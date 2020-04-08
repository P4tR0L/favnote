import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const articles = [
  {
    title: 'React on my mind',
    content: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.',
    articleUrl: 'https://tvn24.pl/',
    created: '1 day',
  },
  {
    title: 'Wish you Nice!',
    content: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.',
    articleUrl: 'https://tvn24.pl/',
    created: '3 days',
  },
  {
    title: 'Why so React?',
    content: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.',
    articleUrl: 'https://tvn24.pl/',
    created: '7 days',
  },
  {
    title: 'React or Vue?',
    content: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.',
    articleUrl: 'https://tvn24.pl/',
    created: '1 day',
  },
  {
    title: 'Vanilla JS is for boomers',
    content: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.',
    articleUrl: 'https://tvn24.pl/',
    created: '2 days',
  },
  {
    title: 'You can be even better!',
    content: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.',
    articleUrl: 'https://tvn24.pl/',
    created: '1 day',
  },
]

const Articles = () => (
  <GridTemplate pageType="article">
    {articles.map(item => (
      <Card
        cardType="article"
        key={item.title}
        {...item} />
    ))};
  </GridTemplate>
);

export default Articles;
