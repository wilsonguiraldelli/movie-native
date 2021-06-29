import { StyleSheet } from "react-native";
import { Colors } from "react-native-paper";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    padding: 16,
  },

  image_container: {
    justifyContent: 'center', alignItems: 'center', marginTop: 24, marginBottom: 16
  },

  image: {
    width: 150, height: 300, borderRadius: 6,
  },

  title: {
    fontWeight: 'bold', fontSize: 18, marginTop: 16
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