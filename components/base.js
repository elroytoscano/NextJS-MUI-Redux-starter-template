import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';

import * as theme from './theme';
import { Hooks } from '../utils';

const ComponentsHolder = ({ Component, pageProps }) => {
  const { useThemeSettings } = Hooks;
  const { darkTheme, lightTheme } = theme;
  const currentTheme = useThemeSettings();
  return (
    <>
      <ThemeProvider theme={currentTheme ? darkTheme : lightTheme}>
        <CssBaseline />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default ComponentsHolder;
