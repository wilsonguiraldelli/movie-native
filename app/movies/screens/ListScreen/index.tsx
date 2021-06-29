import * as React from 'react';
import { Header, If } from 'common/components';
import { FlatList, View } from 'react-native';
import { MovieCard } from 'movies/components';
import { ActivityIndicator, Text } from 'react-native-paper';

import { Props } from './types'
import styles from './styles'

function ListScreen(props: Props): React.ReactElement {
  return (
    <React.Fragment>
      <Header
        title="Movies"
        onChange={props.handleSearch}
      />
      <View style={styles.container}>
        <If condition={props.isLoading}>
          <View style={styles.loading_container}>
            <ActivityIndicator size="large" />
            <Text style={styles.loading_text}>We are searching for the hottest releases of the moment...</Text>
          </View>
        </If>
        <If condition={!props.isLoading}>
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
        </If>
      </View>
    </React.Fragment>
  )
}

export default ListScreen;