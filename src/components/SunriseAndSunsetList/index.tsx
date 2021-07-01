import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import SunCalc from 'suncalc';

import {Coords, SunInfo} from '../../types';
import SunriseAndSunsetItem from './SunriseAndSunsetItem';

type Props = {
  coords: Coords;
};

const SunriseAndSunsetList: React.FC<Props> = ({coords}) => {
  const [sunInfo, setSunInfo] = useState<SunInfo[]>([]);

  useEffect(() => {
    let sunInfoArray: SunInfo[] = [];
    const today = new Date();
    for (let i = 0; i < 10; i++) {
      const date = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
      const times = SunCalc.getTimes(date, coords.latitude, coords.longitude);
      const sunriseStr =
        times.sunrise.getHours() + ':' + times.sunrise.getMinutes();
      const sunsetStr =
        times.sunset.getHours() + ':' + times.sunset.getMinutes();
      sunInfoArray.push({
        id: i+1,
        date: date.toLocaleDateString(),
        sunrise: sunriseStr,
        sunset: sunsetStr,
      });
    }
    setSunInfo(sunInfoArray);
  }, []);

  return (
    <ScrollView>
      {sunInfo.map(day => (
        <SunriseAndSunsetItem sunInfo={day} key={day.id} />
      ))}
    </ScrollView>
  );
};

export default SunriseAndSunsetList;
