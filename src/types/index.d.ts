import {StackNavigationProp} from '@react-navigation/stack';
import Geolocation from 'react-native-geolocation-service'


export type CachesScreenNavigationProp = StackNavigationProp<
RootStackParamList,
'Caches'
>;

export type Coords = Geolocation.GeoCoordinates;

export type RootStackParamList = {
  Radius: undefined;
  Caches: { radius: string };
  Details: { cacheCode: string };
  Sun: undefined;
}