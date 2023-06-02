import React from 'react';
import {darkTheme} from './src/assets/theme';
import AppStack from './src/navigation/AppStack';
import {ThemeProvider} from 'styled-components/native';
import {AffirmationModal} from './src/modals';
import {ModalContextProvider} from './src/contexts/modalContext';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={darkTheme}>
      <ModalContextProvider>
        <AffirmationModal />
        <AppStack setHiddenStatusBar={false} />
      </ModalContextProvider>
    </ThemeProvider>
  );
}

export default App;
