import { StyleSheet } from "react-native";
import { Colors } from "react-native-paper";

export default StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: Colors.grey900,
    borderTopWidth: 0.5,
  },

  info_container: {
    flex: 4, justifyContent: 'center'
  },

  vote_average_container: {
    flexDirection: 'row', alignItems: 'center', flex: 1
  },

  vote_average_text: {
    fontSize: 14, color: Colors.yellow700, fontWeight: '500'
  },

  icon: {
    margin: 0,
  },

  avatar: {
    marginRight: 12,
  },

  title: {
    fontWeight: '700',
    color: Colors.white,
  }
})