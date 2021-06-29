import * as React from 'react';

import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Navigator from 'services/navigator';

import {
  ListContainer as MovieListContainer,
  DetailsContainer as MovieDetailsContainer,
} from 'movies/containers';

const Stack = createStackNavigator();

const Router: React.FC = () => (
  <React.Fragment>
    <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
    <NavigationContainer
      ref={Navigator.setContainer}
      onStateChange={state => {
        const currentScreen = Navigator.getRouteNameFromState(state);
        console.log(`[NAVIGATOR] navigated to ${currentScreen}.`);
      }}
    >
      <Stack.Navigator
        initialRouteName="movies-list"
        headerMode="none"
      >
        <Stack.Screen name="movies-list" component={MovieListContainer} />
        <Stack.Screen name="movies-details" component={MovieDetailsContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  </React.Fragment>
);

export default Router;
