import React from 'react';
import {ThemeProvider} from 'styled-components';
import {darkTheme} from './src/assets/theme';
import AppStack from './src/navigation/AppStack';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppStack setHiddenStatusBar={false} />
    </ThemeProvider>
  );
}

export default App;
