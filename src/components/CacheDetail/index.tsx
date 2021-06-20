import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import {API_URL, API_CONSUMER_KEY} from '@env';

interface Cache {
  code: string;
  name: string;
  location: string;
  status: string;
  type: string;
}

type Props = {
  route: any;
};

const CacheDetail: React.FC<Props> = ({route}) => {
  const {cacheCode} = route.params;

  const [isLoading, setLoading] = useState(true);
  const [cache, setCache] = useState<Cache>({
    code: '',
    name: '',
    location: '',
    status: '',
    type: '',
  });

  useEffect(() => {
    axios
      .get(`${API_URL}/services/caches/geocache`, {
        params: {
          cache_code: cacheCode,
          consumer_key: API_CONSUMER_KEY,
        },
      })
      .then(response => {
        setCache(response.data);
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <Text>
          {cache.name} - {cache.location} - {cache.status} - {cache.type}
        </Text>
      )}
    </View>
  );
};

export default CacheDetail;
