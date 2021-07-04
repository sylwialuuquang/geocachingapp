import React, {useEffect, useCallback} from 'react';
import {View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button} from 'react-native-paper';

import {RootStackParamList} from '../../types';
import {Screens} from '../../navigation/screen';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  Screens.HOME
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home: React.FC<Props> = ({navigation}) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const goToRadiusScreen = useCallback(() => {
    navigation.navigate(Screens.RADIUS);
  }, []);

  const goToSunScreen = useCallback(() => {
    navigation.navigate(Screens.SUN);
  }, []);

  return (
    <View>
      <Button mode="contained" onPress={goToRadiusScreen}>
        Search for caches!
      </Button>
      <Text></Text>
      <Button mode="contained" onPress={goToSunScreen}>
        Sunrise and sunset
      </Button>
    </View>
  );
};

export default Home;
