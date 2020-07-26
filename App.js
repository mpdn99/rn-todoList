import React from 'react';
import {NavigationContainer} from '@react-navigation/native' 
import TabBarNavigator from './src/navigators/TabBarNavigator'
import 'react-native-gesture-handler'

export default function App() {
  return (
    <NavigationContainer>
      <TabBarNavigator/>
    </NavigationContainer>
  );
}
