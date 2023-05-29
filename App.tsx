import React from 'react';
import {darkTheme} from './src/assets/theme';
import AppStack from './src/navigation/AppStack';
import {ThemeProvider} from 'styled-components/native';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppStack setHiddenStatusBar={false} />
    </ThemeProvider>
  );
}

export default App;
