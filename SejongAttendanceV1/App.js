import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import LoginStackNavi from './navigation/LoginStackNavi';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <NavigationContainer>
      <LoginStackNavi />
    </NavigationContainer>
  );
};

export default App;
