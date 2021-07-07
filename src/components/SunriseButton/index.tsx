import React, {useCallback} from 'react';
import {Image, TouchableOpacity} from 'react-native';

import {HomeScreenNavigationProp} from '../../types';
import {Screens} from '../../navigation/screen';

type BtnStyle = {
  width: number;
  height: number;
  alignSelf: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
};

type Props = {
  navigation: HomeScreenNavigationProp;
  style: BtnStyle;
};

const SunriseButton: React.FC<Props> = ({navigation, style}) => {
  const goToSunScreen = useCallback(() => {
    navigation.navigate(Screens.SUN);
  }, []);

  return (
    <TouchableOpacity onPress={goToSunScreen}>
      <Image
        style={style}
        source={require('../../assets/images/sunrise.png')}
      />
    </TouchableOpacity>
  );
};

export default SunriseButton;
