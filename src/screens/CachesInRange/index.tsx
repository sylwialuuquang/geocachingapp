import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';

import LocationService from '../../services/LocationService';
import {RootStackParamList, CachesScreenNavigationProp} from '../../types';
import {Screens} from '../../navigation/screen';

import CacheList from '../../components/CacheList'

type LocationData = Geolocation.GeoPosition;

type CachesScreenRouteProp = RouteProp<RootStackParamList, Screens.CACHES>;

type Props = {
  navigation: CachesScreenNavigationProp;
  route: CachesScreenRouteProp;
};

const CachesInRange: React.FC<Props> = ({navigation, route}) => {
  const [locationResponse, setLocationResponse] = useState<null | LocationData>(
    null,
  );
  const {radius} = route.params;

  useEffect(() => {
    const location = new LocationService();
    return location.getLocation(setLocationResponse);
  }, [setLocationResponse]);

  return (
    <View style={styles.container}>
      {locationResponse === null ? (
        <Text>Loading caches in range...</Text>
      ) : (
        <CacheList 
          navigation={navigation}
          radius={+radius}
          coords={locationResponse.coords}/>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20
  }
})

export default CachesInRange;
