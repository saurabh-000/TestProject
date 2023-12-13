import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Main from './src/Navigation/StackNavigation';

function App() {
  return (
    <NavigationContainer>
      <Main/>
    </NavigationContainer>
  );
}

export default App;
