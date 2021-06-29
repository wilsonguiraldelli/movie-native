import * as React from 'react';
import { Header, If } from 'common/components';
import { FlatList, View } from 'react-native';
import { MovieCard } from 'movies/components';
import { ActivityIndicator, Text } from 'react-native-paper';
import { DateTime } from 'luxon'

import { Props } from './types'
import styles from './styles'

function ListScreen(props: Props): React.ReactElement {

  const formatDate = (date: string) => DateTime.fromFormat(date, 'yyyy-MM-dd').toFormat('MM/dd/yyyy')

  return (
    <React.Fragment>
      <Header
        title="Upcoming Movies"
        handlePressSearch={props.handlePressSearch}
      />
      <View style={styles.container}>
        <If condition={props.isLoading && !props.data.results.length}>
          <View style={styles.loading_container}>
            <ActivityIndicator size="large" />
            <Text style={styles.loading_text}>We are searching for the hottest releases of the moment...</Text>
          </View>
        </If>
        <If condition={!!props.data.results.length}>
          <React.Fragment>
            <View style={styles.info_text_container}>
              <Text
                style={styles.info_text}
              >
                {`Upcoming movies from ${formatDate(props.data.dates.minimum || '')} to ${formatDate(props.data.dates.maximum || '')}`}
              </Text>
            </View>
            <FlatList
              contentContainerStyle={styles.content}
              keyExtractor={(movie, index) => `${movie.id}-${index}`}
              data={props.data.results}
              renderItem={({ item }) => {
                return (
                  <MovieCard
                    title={item.original_title}
                    img={item.poster_path}
                    release_date={item.release_date}
                    vote_average={item.vote_average}
                    onPress={() => props.handleSelectMovie(item)}
                  />
                )
              }}
              onEndReached={props.handlePagination}
            />
          </React.Fragment>
        </If>
      </View>
    </React.Fragment>
  )
}

export default ListScreen;