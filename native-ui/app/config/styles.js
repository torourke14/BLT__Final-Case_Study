import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  titleText: {
    fontSize: 24,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: 'bold'
  },
  listText: {

  },
  listing: {
    flex: 1,
    flexDirection: 'column',
    borderStyle: 'solid',
    borderColor: 'black',
    backgroundColor: colors.white,
    borderWidth: 1,
    marginTop: 5,
    padding: 10,
    width: '100%',
  },
  price: {
    flex: 1,
    width: 40,
    flexDirection: 'column',
    borderStyle: 'solid',
    borderColor: 'transparent',
    backgroundColor: colors.highlight,
    borderWidth: 1,
    fontSize: 16,
  },
  success: {
    flex: 1,
    borderStyle: 'solid',
    borderColor: 'transparent',
    backgroundColor: colors.success,
    borderWidth: 1,
    fontSize: 16,
},
pending: {
    flex: 1,
    borderStyle: 'solid',
    borderColor: 'transparent',
    backgroundColor: colors.highlight,
    borderWidth: 1,
    fontSize: 16,
  },
  cancelled: {
    flex: 1,
    borderStyle: 'solid',
    borderColor: 'transparent',
    backgroundColor: colors.danger,
    borderWidth: 1,
    fontSize: 16,
},
completed: {
    flex: 1,
    borderStyle: 'solid',
    borderColor: 'transparent',
    backgroundColor: colors.completed,
    borderWidth: 1,
    fontSize: 16,
},
text: {
    backgroundColor: colors.light,
    flex: 1,
    fontSize: 18,
    margin: 10,
}
};