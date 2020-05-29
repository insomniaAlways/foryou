/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useLayoutEffect } from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import AppNavigator from './src/navigations';
// import SplashScreen from 'react-native-splash-screen'
// import NetInfo from '@react-native-community/netinfo';
// import { onNetworkAvailable, onNetworkUnAvailable } from './src/store/actions/networkActions';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
