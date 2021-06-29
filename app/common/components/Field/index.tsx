import * as React from 'react';
import { View, TextInput } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';

import styles from './styles';
import { Props } from './types';

export default function Field(props: Props): React.ReactElement {
  return (
    <View style={styles.container}>
      <IconButton
        icon={props?.leftIcon}
        size={24}
        color={Colors.white}
        style={styles.left_icon}
      />
      <TextInput
        placeholder={props.placeholder}
        onChangeText={props.onChange}
        style={styles.text_input}
      />
    </View>
  )
}