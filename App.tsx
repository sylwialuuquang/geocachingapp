import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CacheDetail from './src/components/CacheDetail';
import RadiusInput from './src/components/RadiusInput';
import CachesInRange from './src/screens/CachesInRange'
import SunriseAndSunset from './src/screens/SunriseAndSunset';
import Home from './src/screens/Home'
import { RootStackParamList } from './src/types'


const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Radius" component={RadiusInput} />
        <Stack.Screen name="Caches" component={CachesInRange} />
        <Stack.Screen name="Details" component={CacheDetail} />
        <Stack.Screen name="Sun" component={SunriseAndSunset} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
