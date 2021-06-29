import { StyleSheet } from "react-native";

import { Colors } from 'react-native-paper';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.grey900,
  },

  content: {
    padding: 16,
  },

  title: {
    fontSize: 28,
    color: '#FFF',
    fontWeight: 'bold',
    flex: 1,
  },

  title_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  right_icon: {
    margin: 0,
  },

  left_icon: {
    margin: 0,
    marginRight: 8
  },
})