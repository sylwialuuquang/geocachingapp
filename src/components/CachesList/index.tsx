import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import axios from 'axios';

import {API_URL, API_CONSUMER_KEY} from '@env';
import Cache from './Cache';
import {CachesScreenNavigationProp, Coords} from '../../types';


interface CacheInfo {
  name: string;
  location: string;
  type: string;
}

type Props = {
  navigation: CachesScreenNavigationProp;
  radius: number;
  coords: Coords;
};


const CachesList: React.FC<Props> = ({navigation, radius, coords}) => {
  const [isLoading, setLoading] = useState(true);
  const [caches, setCaches] = useState<{[cacheCode: string]: CacheInfo}>({});

  useEffect(() => {
    axios
      .get(`${API_URL}/services/caches/shortcuts/search_and_retrieve`, {
        params: {
          search_method: 'services/caches/search/nearest',
          search_params: {center: `${coords.latitude}|${coords.longitude}`, radius: radius},
          retr_method: 'services/caches/geocaches',
          retr_params: {fields: 'name|location|type'},
          wrap: true,
          consumer_key: API_CONSUMER_KEY,
        },
      })
      .then(response => {
        setCaches(response.data.results);
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView>
      <View>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          Object.entries(caches).map(([key, value]) => (
            <TouchableOpacity
              key={key}
              onPress={() =>
                navigation.navigate('Details', {
                  cacheCode: key,
                })
              }>
              <Cache
                name={value.name}
                location={value.location}
                type={value.type}
              />
            </TouchableOpacity>
          ))
        )}
      </View>
    </ScrollView>
  );
};

export default CachesList;
