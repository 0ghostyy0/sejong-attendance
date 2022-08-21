import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AppStackNavi from './navigation/AppStackNavi';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import Store from './redux/Store';

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <AppStackNavi />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
