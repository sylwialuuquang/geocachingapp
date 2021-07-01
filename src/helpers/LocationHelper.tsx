import {View, Text, Platform} from 'react-native'
import Geolocation from 'react-native-geolocation-service';
import {PERMISSIONS, check, RESULTS, request} from 'react-native-permissions';

export function LocationHelper(setLocationResponse: React.Dispatch<React.SetStateAction<Geolocation.GeoPosition | null>>) {
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
  }