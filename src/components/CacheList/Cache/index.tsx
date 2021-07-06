import React from 'react';
import { TouchableOpacity, Text } from 'react-native'


type Props = {
    item: {
        name: string;
        location: string;
        type: string;
    };
    onPress: () => void;
}

const Item: React.FC<Props> = ({item, onPress}) => (
    <TouchableOpacity onPress={onPress}>
        <Text>{item.name} - {item.location}, {item.type}</Text>
    </TouchableOpacity>
)

export default Item;
