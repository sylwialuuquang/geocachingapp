import React from 'react';
import {View, Text} from 'react-native';
import {SunInfo} from '../../../types';

type Props = {
  sunInfo: SunInfo;
};

const SunriseAndSunsetItem: React.FC<Props> = ({sunInfo}) => {
  return (
    <View>
      <Text>Day {sunInfo.id}:{sunInfo.date}</Text>
      <Text>Sunrise: {sunInfo.sunrise}</Text>
      <Text>Sunset:{sunInfo.sunset}</Text>
      <Text>------------</Text>
    </View>
  );
};

export default SunriseAndSunsetItem;
