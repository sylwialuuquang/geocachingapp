import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useForm, Controller} from 'react-hook-form';
import {TextInput} from 'react-native-paper';

import {RootStackParamList} from '../../types';
import {Screens} from '../../navigation/screen';
import SubmitButton from '../SubmitButton';
import colors from '../../assets/colors/colors';

type FormData = {
  radius: string;
};

type RadiusScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  Screens.RADIUS
>;

type Props = {
  navigation: RadiusScreenNavigationProp;
};

const RadiusInput: React.FC<Props> = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();

  const onSubmit = (data: FormData) =>
    navigation.navigate(Screens.CACHES, {
      radius: data.radius,
    });

  const radiusRules = {
    required: true,
    pattern: {value: /^\d+$/, message: 'Digits only'},
  };

  return (
    <View style={styles.container}>
      <Image style={styles.compassImg} source={require('../../assets/images/compass.png')}></Image>
      <View style={styles.descContainer}>
        <Text style={styles.descText}>Find caches in your area! Enter radius.</Text>
      </View>
      <View style={styles.inputContainer}>
        <Controller
          name="radius"
          defaultValue=""
          control={control}
          rules={radiusRules}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              label="Radius"
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
        />
        {errors.radius && <Text>{errors.radius.message}</Text>}
      </View>
      <View>
        <SubmitButton
          text="Find caches"
          icon="magnify"
          mode="contained"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  compassImg: {
    alignSelf: 'center',
    height: 150,
    width: 150,
  },
  descContainer: {
    alignSelf: 'center',
    paddingTop: 30,
  },
  descText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    color: colors.black,
    textAlign: 'center'
  },
  inputContainer: {
    paddingVertical: 20,
  }
})

export default RadiusInput;
