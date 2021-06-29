import { CommonActions } from '@react-navigation/native';
import { InteractionManager } from 'react-native';

let instance;

function setContainer(container) {
  if (container) {
    instance = container;
  }
}

function dispatch(action) {
  if (!instance) {
    throw new Error(
      '[NavigatorService] Trying to dispatch task to container when there is no container...'
    );
  }

  return instance.dispatch(action);
}

function getRouteNameFromState(navigationState) {
  if (!navigationState) {
    return null;
  }

  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.state?.routes) {
    return getRouteNameFromState(route.state);
  }
  return route.name;
}

function reset(routeName, params = {}) {
  dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: routeName,
          params,
        },
      ],
    })
  );
}

function replace(routeName, params) {
  dispatch({
    type: 'Navigation/REPLACE',
    routeName,
    params,
  });
}

function navigate(routeName, params) {
  dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    })
  );
}

function navigateDeep(actions) {
  dispatch(
    actions.reduceRight(
      (prevAction, action) =>
        CommonActions.navigate({
          type: 'Navigation/NAVIGATE',
          routeName: action.routeName,
          params: action.params,
          action: prevAction,
        }),
      undefined
    )
  );
}

function back(key = null) {
  return new Promise((success) => {
    dispatch(CommonActions.back({ key }));
    InteractionManager.runAfterInteractions(success);
  });
}

function getCurrentRoute() {
  if (!instance || !instance.state.nav) {
    return null;
  }

  return instance.state.nav.routes[instance.state.nav.index] || null;
}

export {
  setContainer,
  navigateDeep,
  navigate,
  reset,
  getCurrentRoute,
  getRouteNameFromState,
  dispatch,
  back,
  replace,
};
