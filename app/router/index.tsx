import * as React from 'react';

import { StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import * as Navigator from 'services/navigator';

import {
  ListContainer as MovieListContainer,
  DetailsContainer as MovieDetailsContainer,
  SearchContainer as MovieSearchContainer,

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
        <Stack.Screen
          name="movies-search"
          component={MovieSearchContainer}
          options={Platform.OS === 'ios'
            ? {
              gestureEnabled: true,
              gestureDirection: "vertical",
              cardStyleInterpolator: CardStyleInterpolators
                .forModalPresentationIOS,
            }
            : {}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </React.Fragment>
);

export default Router;
