import {Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {PERMISSIONS, check, RESULTS, request} from 'react-native-permissions';

export default class LocationService {
  static permission =
    Platform.OS === 'android'
      ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
      : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;

  getLocation(
    setLocationResponse: React.Dispatch<
      React.SetStateAction<Geolocation.GeoPosition | null>
    >,
  ) {
    check(LocationService.permission).then(result => {
      if (result === RESULTS.GRANTED) {
        this.enableLocation(setLocationResponse);
      } else if (result === RESULTS.DENIED) {
        request(LocationService.permission).then(requestResult => {
          if (requestResult === RESULTS.GRANTED) {
            this.enableLocation(setLocationResponse);
          }
        });
      }
    });
    return () => {
      Geolocation.stopObserving();
    };
  }

  enableLocation(
    setLocationResponse: React.Dispatch<
      React.SetStateAction<Geolocation.GeoPosition | null>
    >,
  ) {
    Geolocation.watchPosition(setLocationResponse, undefined, {
      accuracy: {android: 'high'},
      enableHighAccuracy: true,
      interval: 100,
      fastestInterval: 50,
      showLocationDialog: true,
      showsBackgroundLocationIndicator: true,
    });
  }
}
