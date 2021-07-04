import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import SunCalc from 'suncalc';
import {DateTime} from 'luxon';

import {Coords, SunInfo} from '../../types';
import SunriseAndSunsetItem from './SunriseAndSunsetItem';

type Props = {
  coords: Coords;
};

const SunriseAndSunsetList: React.FC<Props> = ({coords}) => {
  const [sunInfo, setSunInfo] = useState<SunInfo[]>([]);

  useEffect(() => {
    const dt = DateTime.local();

    setSunInfo(
      Array.from(Array(10).keys()).map(num => {
        const date = dt.plus({hours: num * 24});

        const times = SunCalc.getTimes(
          date.toJSDate(),
          coords.latitude,
          coords.longitude,
        );
        const sunrise = DateTime.fromJSDate(times.sunrise).toFormat('HH:mm');
        const sunset = DateTime.fromJSDate(times.sunset).toFormat('HH:mm');
        return {
          id: num,
          date: date.toFormat('dd LLL'),
          sunrise: sunrise,
          sunset: sunset,
        };
      }),
    );
  }, []);

  return (
    <ScrollView>
      {sunInfo.map(day => (
        <SunriseAndSunsetItem {...day} key={day.id} />
      ))}
    </ScrollView>
  );
};

export default SunriseAndSunsetList;
