import { StyleSheet } from "react-native";
import { Colors } from 'react-native-paper';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#1C1C1E',
    borderRadius: 10,
    marginVertical: 16,
    alignItems: 'center',
  },

  left_icon: {
    margin: 0,
  },

  rigth_icon: {
    margin: 0,
  },

  text_input: {
    color: Colors.white,
    flex: 1,
  }
})