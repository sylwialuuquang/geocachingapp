import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button} from 'react-native-paper';

import {RootStackParamList} from '../../types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home: React.FC<Props> = ({navigation}) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate('Radius');
        }}>
        Search for caches!
      </Button>
      <Text></Text>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate('Sun');
        }}>
        Sunrise and sunset
      </Button>
    </View>
  );
};

export default Home;
