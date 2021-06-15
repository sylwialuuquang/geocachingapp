import React from 'react';
import { View, Text } from 'react-native';


export type Props = {
    name: string;
    location: string;
    type: string;
  }

const Cache: React.FC<Props> = ({ name, location, type }) => {
    return (
        <View>
            <Text>{name} - {location}, {type}</Text>
        </View>
    );
};

export default Cache;