import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AppStackNavi from './navigation/AppStackNavi';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <NavigationContainer>
      <AppStackNavi />
    </NavigationContainer>
  );
};

export default App;
