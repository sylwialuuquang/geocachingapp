import React, {useState, useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import axios from 'axios';

import {API_URL, API_CONSUMER_KEY} from '@env';
import Cache from './Cache';
import {Screens} from '../../navigation/screen';
import {CachesScreenNavigationProp, Coords} from '../../types';

interface CacheInfoApi {
  name: string;
  location: string;
  type: string;
}

interface CacheInfo extends CacheInfoApi {
  id: string;
}

type Props = {
  navigation: CachesScreenNavigationProp;
  radius: number;
  coords: Coords;
};

interface Data {
  results: {[id: string]: CacheInfoApi};
}

const ItemList: React.FC<Props> = ({navigation, radius, coords}) => {
  const [isLoading, setLoading] = useState(true);
  const [caches, setCaches] = useState<CacheInfo[]>([]);

  useEffect(() => {
    axios
      .get<Data>(`${API_URL}/services/caches/shortcuts/search_and_retrieve`, {
        params: {
          search_method: 'services/caches/search/nearest',
          search_params: {
            center: `${coords.latitude}|${coords.longitude}`,
            radius: radius,
          },
          retr_method: 'services/caches/geocaches',
          retr_params: {fields: 'name|location|type'},
          wrap: true,
          consumer_key: API_CONSUMER_KEY,
        },
      })
      .then(response => {
        setCaches(
          Object.entries(response.data.results).map(([key, value]) => ({
            id: key,
            location: value.location,
            name: value.name,
            type: value.type,
          })),
        );
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({item}: {item: CacheInfo}) => {
    return (
      <Cache
        item={item}
        onPress={() =>
          navigation.navigate(Screens.DETAILS, {
            cacheCode: item.id,
          })
        }
      />
    );
  };

  return (
    <View>
      {isLoading ? (
        <Text>Loading....!!</Text>
      ) : (
        <FlatList
          data={caches}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default ItemList;
