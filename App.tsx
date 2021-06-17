import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Caches from './src/components/CachesList';
import CacheDetail from './src/components/CacheDetail';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Caches">
        <Stack.Screen name='Caches' component={Caches} />
        <Stack.Screen name='Details' component={CacheDetail} />
        {/* <View>
          <Caches />
          <Text>-------------</Text>
          <CacheDetail />
        </View> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
