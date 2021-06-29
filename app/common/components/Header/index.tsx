import * as React from 'react';

import { Text, StatusBar, SafeAreaView, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Field, If } from 'common/components';
import { useNavigation } from '@react-navigation/native';

import { Props } from './types';
import styles from './styles';

export default function Header(props: Props): React.ReactElement {
  const navigation = useNavigation();

  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.title_container}>
            <If condition={!!props.mustGoBack}>
              <IconButton
                icon="chevron-left"
                size={32}
                style={styles.icon}
                onPress={() => navigation.goBack()}
              />
            </If>
            <Text style={styles.title}>
              {props.title}
            </Text>
          </View>
          <If condition={!props.disableSearch}>
            <View>
              <Field
                placeholder="Search for a movie"
                leftIcon="magnify"
                onChange={value => props.onChange
                  ? props.onChange(value)
                  : () => { }
                }
              />
            </View>
          </If>
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
}