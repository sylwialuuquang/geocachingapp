import React from 'react';
import { Text, View } from 'react-native'

import Caches from './src/components/CachesList'
import CacheDetail from './src/components/CacheDetail'


const App = () => {

  return (
    <View>
      <Caches />
      <Text>-------------</Text>
      <CacheDetail />
    </View>
  )
};

export default App;
