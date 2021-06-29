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
  return (
    <ScrollView style={styles.scrollview_background}>
      <Header
        title="Details"
        disableSearch
        mustGoBack
      />

      <View style={styles.container}>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 24, marginBottom: 16 }}>
          <Image
            source={{ uri: `${IMAGE_BASE_URL}${movie.poster_path}`, }}
            style={{ width: 150, height: 300, borderRadius: 6, }}
          />
          <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 16 }}>{movie.original_title}</Text>
        </View>

        <View>
          <Text style={styles.subtitle}>Overview</Text>
          <Text style={{ textAlign: 'justify' }}>{movie.overview}</Text>
        </View>

        <View style={styles.info_container}>
          <Text style={styles.subtitle}>Release date</Text>
          <Text>{DateTime.fromFormat(movie.release_date, 'yyyy-MM-dd').toFormat('MM/dd/yyyy')}</Text>
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