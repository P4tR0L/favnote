import React from 'react';
import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import GlobalStyle from 'theme/GlobalStyle'
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/mainTheme';

addDecorator(story => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={['/']}>
        {story()}
      </MemoryRouter>
    </ThemeProvider>
  </>
)); 