import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';

import CachesList from '../../components/CachesList';
import LocationService from '../../services/LocationService';
import {LocationHelper} from '../../helpers/LocationHelper';
import {RootStackParamList, CachesScreenNavigationProp} from '../../types';
import {Screens} from '../../navigation/screen';

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
    <View>
      {locationResponse === null ? (
        <Text>Loading caches in range...</Text>
      ) : (
        <CachesList
          navigation={navigation}
          radius={+radius}
          coords={locationResponse.coords}
        />
      )}
    </View>
  );
};

export default CachesInRange;
