import React, {useEffect, useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import SubmitButton from '../../components/SubmitButton';
import {HomeScreenNavigationProp} from '../../types';
import {Screens} from '../../navigation/screen';
import SunriseButton from '../../components/SunriseButton';

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

  return (
    <View style={styles.container}>
      <View style={styles.searchBtnContainer}>
        <SubmitButton
          text="Seach for caches!"
          icon="map-search-outline"
          mode="contained"
          onPress={goToRadiusScreen}
          style={styles.searchBtn}
        />
      </View>
      <View style={styles.footerContainer}>
        <SunriseButton style={styles.sunriseBtn} navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchBtnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  searchBtn: {
    height: 75,
    width: 250,
    justifyContent: 'center',
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  sunriseBtn: {
    width: 70,
    height: 70,
    alignSelf: 'flex-end',
  },
});

export default Home;
