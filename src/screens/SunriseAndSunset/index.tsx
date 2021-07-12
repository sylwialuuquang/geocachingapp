import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {Title} from 'react-native-paper';

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
        <View>
            <Title>{`${locationResponse.coords.latitude} | ${locationResponse.coords.longitude}`}</Title>
            <SunriseAndSunsetList coords={locationResponse.coords} />
        </View>
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
