import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Avatar, IconButton, Colors, Text } from 'react-native-paper';
import { If } from 'common/components';

import { Props } from './types';
import styles from './styles';

// @ts-ignore
import { IMAGE_BASE_URL } from '@env';
import { DateTime } from 'luxon'

export default function MovieCard(props: Props): React.ReactElement {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <If condition={!!props.img}>
        <Avatar.Image
          source={{ uri: `${IMAGE_BASE_URL}${props.img}`, }}
          style={styles.avatar}
        />
      </If>
      <If condition={!props.img}>
        <Avatar.Icon
          icon="filmstrip-box-multiple"
          style={styles.avatar}
        />
      </If>
      <View style={styles.info_container}>
        <Text style={styles.title}>
          {props.title}
        </Text>
        <If condition={!!props.release_date}>
          <Text style={{ fontSize: 12 }}>
            {`Release Date: ${DateTime.fromFormat(props.release_date || '', 'yyyy-MM-dd').toFormat('MM/dd/yyyy')}`}
          </Text>
        </If>
      </View>

      <View style={styles.vote_average_container}>
        <IconButton icon="star" color={Colors.yellow700} style={styles.icon} />
        <Text style={styles.vote_average_text}>
          {props.vote_average.toFixed(1)}
        </Text>
      </View>
    </TouchableOpacity>
  )
}