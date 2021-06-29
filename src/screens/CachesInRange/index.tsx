import React, {useEffect, useState} from 'react';
import {View, Text, Platform} from 'react-native'
import {RouteProp} from '@react-navigation/native';
import {PERMISSIONS, check, RESULTS, request} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

import CachesList from '../../components/CachesList' 
import {RootStackParamList, CachesScreenNavigationProp, Coords} from '../../types';


type LocationData = Geolocation.GeoPosition;

type CachesScreenRouteProp = RouteProp<RootStackParamList, 'Caches'>;

type Props = {
  navigation: CachesScreenNavigationProp;
  route: CachesScreenRouteProp;
};

const CachesInRange: React.FC<Props> = ({navigation, route}) => {
    const [locationResponse, setLocationResponse] = useState<null | LocationData>(null)
    const {radius} = route.params

    useEffect(() => {
        const permission =
          Platform.OS === 'android'
            ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
            : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
    
        check(permission).then(result => {
          if (result === RESULTS.GRANTED) {
            enableLocation();
          } else if (result === RESULTS.DENIED) {
            request(permission).then(requestResult => {
              if (requestResult === RESULTS.GRANTED) {
                enableLocation();
              }
            });
          }
        });
    
        function enableLocation() {
            Geolocation.watchPosition(setLocationResponse, undefined, {
                accuracy: {android: 'high'},
                enableHighAccuracy: true,
                interval: 100,
                fastestInterval: 50,
                showLocationDialog: true,
                showsBackgroundLocationIndicator: true,
            })
        }
    
        return () => {
            Geolocation.stopObserving()
        }
      }, [setLocationResponse]);

    return (
        <View>
            {locationResponse === null ? <Text>Loading caches in range...</Text> :
            <CachesList navigation={navigation} radius={+radius} coords={locationResponse.coords}/>}
        </View>
    )
}

export default CachesInRange;