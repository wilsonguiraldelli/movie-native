import * as React from 'react';

import { StatusBar, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Navigator from 'services/navigator';

import { ListContainer as MovieListContainer } from 'movies/containers';

const Stack = createStackNavigator();

const Router: React.FC = (props) => (
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
        initialRouteName="MoviesList"
      >
        <Stack.Screen name="MoviesList" component={MovieListContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  </React.Fragment>
);

const mapStateToProps = () => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
