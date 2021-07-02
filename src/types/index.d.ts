import {StackNavigationProp} from '@react-navigation/stack';
import Geolocation from 'react-native-geolocation-service'


export type CachesScreenNavigationProp = StackNavigationProp<
RootStackParamList,
'Caches'
>;

export type Coords = Geolocation.GeoCoordinates;

export type RootStackParamList = {
  Home: undefined;
  Radius: undefined;
  Caches: { radius: string };
  Details: { cacheCode: string };
  Sun: undefined;
}

export type SunInfo = {
  id: number;
  date: string;
  sunrise: string;
  sunset: string;
}