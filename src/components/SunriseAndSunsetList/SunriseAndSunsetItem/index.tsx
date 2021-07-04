import React from 'react';
import {View, Text} from 'react-native';
import {SunInfo} from '../../../types';

const SunriseAndSunsetItem: React.FC<SunInfo> = ({
  id,
  date,
  sunrise,
  sunset,
}) => {
  return (
    <View>
      <Text>
        Day {id}: {date}
      </Text>
      <Text>Sunrise: {sunrise}</Text>
      <Text>Sunset:{sunset}</Text>
      <Text>------------</Text>
    </View>
  );
};

export default SunriseAndSunsetItem;
