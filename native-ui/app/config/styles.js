import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors,
  button: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
    padding: 15,
    width: "100%",
    marginVertical: 5,
    marginHorizontal: 40,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
    alignSelf: "center",
  },
  bg: {
    width: '100%',
    height: '100%',  
  },
  textInput: {
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
  status: {
    flex: 1,
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderWidth: 1,
    fontSize: 16,
  },
  success: {
    backgroundColor: colors.success,
  },
  pending: {
    backgroundColor: colors.highlight,
  },
  cancelled: {
    backgroundColor: colors.danger,
  },
  completed: {
    backgroundColor: colors.completed,
  },
  text: {
    backgroundColor: colors.light,
    flex: 1,
    fontSize: 18,
    margin: 10,
  },
  error: {
    color: "red",
  },
};