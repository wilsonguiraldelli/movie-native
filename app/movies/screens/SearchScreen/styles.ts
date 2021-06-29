import { StyleSheet } from "react-native";
import { Colors } from "react-native-paper";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },

  content: {
    backgroundColor: Colors.black,
  },

  background: {
    backgroundColor: Colors.black,
  },

  loading_container: {
    flex: 1,
    marginTop: 60,
    alignItems:
      'center'
  },

  loading_text: {
    textAlign: 'center',
    marginTop: 24,
    color: Colors.blue700
  },

  info_text_container: {
    padding: 16,
  },

  info_text: {
    fontSize: 12,
  }
})