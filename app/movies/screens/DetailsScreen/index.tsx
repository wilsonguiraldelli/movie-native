import * as React from 'react';
import { Text, IconButton, Colors } from 'react-native-paper';
import { Header } from 'common/components';

import { Props } from './types'
import styles from './styles'
import { View, Image, ScrollView } from 'react-native';

// @ts-ignore
import { IMAGE_BASE_URL } from '@env';
import { DateTime } from 'luxon'

function DetailsScreen({ movie }: Props): React.ReactElement {
  console.log('MOVIE', movie);
  return (
    <ScrollView style={styles.scrollview_background}>
      <Header
        title="Details"
        mustGoBack
      />

      <View style={styles.container}>
        <View style={styles.image_container}>
          <Image
            source={{ uri: `${IMAGE_BASE_URL}${movie.poster_path}`, }}
            style={styles.image}
          />
          <Text style={styles.title}>{movie.original_title}</Text>
        </View>

        <View>
          <Text style={styles.subtitle}>Overview</Text>
          <Text style={{ textAlign: 'justify' }}>{movie.overview || `This movie doesn't have a overwiew`}</Text>
        </View>

        <View style={styles.info_container}>
          <Text style={styles.subtitle}>Release date</Text>
          <Text>{
            movie.release_date
              ? DateTime.fromFormat(movie.release_date || '', 'yyyy-MM-dd').toFormat('MM/dd/yyyy')
              : `This movie doesn't have a release date`
          }</Text>
        </View>

        <View style={styles.info_container}>
          <Text style={styles.subtitle}>Vote average</Text>
          <View style={styles.vote_average_container}>
            <IconButton icon="star" color={Colors.yellow700} style={styles.icon} />
            <Text style={styles.vote_average_text}>
              {movie.vote_average.toFixed(1)}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default DetailsScreen;