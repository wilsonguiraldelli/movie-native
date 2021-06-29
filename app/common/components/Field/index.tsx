import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, TextInput } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import { If } from 'common/components';

import styles from './styles';
import { Props } from './types';

export default function Field(props: Props): React.ReactElement {
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    props.onChange(value);
  }, [value])

  return (
    <View style={styles.container}>
      <IconButton
        icon={props?.leftIcon || ''}
        size={24}
        color={Colors.white}
        style={styles.left_icon}
      />
      <TextInput
        placeholder={props.placeholder}
        onChangeText={setValue}
        value={value}
        style={styles.text_input}
        onFocus={props.onFocus}
        placeholderTextColor={Colors.white}
      />
      <If condition={!!value}>
        <IconButton
          icon="close-circle"
          size={24}
          color={Colors.white}
          style={styles.rigth_icon}
          onPress={() => setValue('')}
        />
      </If>
    </View>
  )
}