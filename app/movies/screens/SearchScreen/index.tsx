import * as React from 'react';
import { Text, IconButton, Colors, ActivityIndicator } from 'react-native-paper';
import { Header, If } from 'common/components';
import { MovieCard } from 'movies/components';

import { Props } from './types'
import styles from './styles'
import { View, FlatList } from 'react-native';

function SearchScreen(props: Props): React.ReactElement {
  return (
    <React.Fragment>
      <Header
        title="Search"
        mustGoBack
        onChange={props.handleSearch}
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

export default SearchScreen;