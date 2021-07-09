import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {List} from 'react-native-paper';

type Props = {
  item: {
    name: string;
    location: string;
    type: string;
  };
  onPress: () => void;
};

const Item: React.FC<Props> = ({item, onPress}) => (
  <List.Item
    title={item.name}
    description={`${item.location}, type: ${item.type}`}
    onPress={onPress}
    left={props => <List.Icon {...props} icon="map-marker-question-outline"/>}
  />
);

export default Item;
