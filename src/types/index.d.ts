import {StackNavigationProp} from '@react-navigation/stack';
import Geolocation from 'react-native-geolocation-service'

import { Screens } from '../navigation/screen';


export type CachesScreenNavigationProp = StackNavigationProp<
RootStackParamList,
Screens.CACHES
>;

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  Screens.HOME
>;

export type Coords = Geolocation.GeoCoordinates;

export type RootStackParamList = {
  HOME: undefined;
  RADIUS: undefined;
  CACHES: { radius: string };
  DETAILS: { cacheCode: string };
  SUN: undefined;
}

export class SunInfo {
  id: number;
  date: string;
  sunrise: string;
  sunset: string;
}