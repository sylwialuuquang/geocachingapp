import React from 'react';
import { View, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, Button } from 'react-native-paper';


type FormData = {
    radius: string
}

type Props = {
    navigation : any
}

const RadiusInput: React.FC<Props> = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>()
  const onSubmit = (data : FormData) => navigation.navigate('Caches', {
    radius: data.radius
  });


  return (
      <View>
          <Controller
            name='radius'
            defaultValue=""
            control={control}
            rules={{ required: true, pattern: {value: /[\d]/g, message: 'Digits only' }}}
            render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
            )}
            />
          {errors.radius && <Text>{errors.radius.message}</Text>}
          <Button mode="contained" onPress={handleSubmit(onSubmit)}>find caches</Button>
      </View>
  );
};

export default RadiusInput;