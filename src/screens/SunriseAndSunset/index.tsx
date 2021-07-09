import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import LocationService from '../../services/LocationService';
import SunriseAndSunsetList from '../../components/SunriseAndSunsetList';

const SunriseAndSunset: React.FC = () => {
  const [locationResponse, setLocationResponse] =
    useState<null | Geolocation.GeoPosition>(null);

  useEffect(() => {
    const location = new LocationService();
    return location.getLocation(setLocationResponse);
  }, [setLocationResponse]);

  return (
    <View style={styles.container}>
      {locationResponse === null ? (
        <Text>Loading...</Text>
      ) : (
        <SunriseAndSunsetList coords={locationResponse.coords} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default SunriseAndSunset;
