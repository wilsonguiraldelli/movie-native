import { StyleSheet } from "react-native";
import { Colors } from "react-native-paper";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    padding: 16,
  },

  subtitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },

  info_container: {
    marginVertical: 8
  },

  vote_average_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  vote_average_text: {
    fontSize: 14, color: Colors.yellow700, fontWeight: '500'
  },

  icon: {
    margin: 0,
  },

  scrollview_background: {
    backgroundColor: Colors.black,
  }
})