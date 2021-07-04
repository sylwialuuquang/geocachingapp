import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CacheDetail from './components/CacheDetail';
import RadiusInput from './components/RadiusInput';
import CachesInRange from './screens/CachesInRange'
import SunriseAndSunset from './screens/SunriseAndSunset';
import Home from './screens/Home'
import { RootStackParamList } from './types'
import { Screens } from './navigation/screen';


const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screens.HOME}>
        <Stack.Screen name={Screens.HOME} component={Home} />
        <Stack.Screen name={Screens.RADIUS} component={RadiusInput} />
        <Stack.Screen name={Screens.CACHES} component={CachesInRange} />
        <Stack.Screen name={Screens.DETAILS} component={CacheDetail} />
        <Stack.Screen name={Screens.SUN} component={SunriseAndSunset} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
