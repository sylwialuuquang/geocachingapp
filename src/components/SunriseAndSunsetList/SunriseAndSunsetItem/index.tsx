import React from 'react';
import {View, Text} from 'react-native';
import {List, Divider} from 'react-native-paper';

import {SunInfo} from '../../../types';

const SunriseAndSunsetItem: React.FC<SunInfo> = ({
  id,
  date,
  sunrise,
  sunset,
}) => {
  return (
    <View>
      <List.Item
        title={date}
        description={`Sunrise: ${sunrise}, Sunset: ${sunset}`}
        left={props => <List.Icon {...props} icon="white-balance-sunny" />}
      />
      <Divider />
    </View>
  );
};

export default SunriseAndSunsetItem;
