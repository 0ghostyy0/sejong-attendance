import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import LoginStackNavi from './navigation/LoginStackNavi';

const App = () => {
  return (
    <NavigationContainer>
      <LoginStackNavi />
    </NavigationContainer>
  );
};

export default App;
