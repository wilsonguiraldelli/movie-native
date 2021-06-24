/* eslint-disable no-console */
import * as React from 'react';
import { Provider as PaperProvider, Portal } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { store } from 'store';
import theme from 'style/theme';
import Router from 'router';

export const Master: React.FC = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <Portal.Host>
          <Router />
        </Portal.Host>
      </PaperProvider>
    </StoreProvider>
  );
};
