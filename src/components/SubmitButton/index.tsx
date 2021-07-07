import React from 'react';
import {Button} from 'react-native-paper';

import colors from '../../assets/colors/colors';

type Props = {
  icon?: string;
  text: string;
  onPress: () => void;
  mode: 'text' | 'outlined' | 'contained';
  style?: {
    height?: number;
    width?: number;
    justifyContent?: 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between' | 'space-evenly'
  }
};
const SubmitButton: React.FC<Props> = ({text, icon, onPress, mode, style}) => {
  return (
    <Button
      icon={icon}
      color={colors.secondary}
      mode={mode}
      onPress={onPress}
      labelStyle={{fontFamily: 'Montserrat-SemiBold', color: colors.white}}
      contentStyle={style}
      >
      {text}
    </Button>
  );
};

export default SubmitButton;
