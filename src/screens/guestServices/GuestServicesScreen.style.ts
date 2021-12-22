import { ViewStyle, StyleSheet, TextStyle } from "react-native";
import color from "../../shared/theme/colors";
import font from "../../shared/theme/fonts";
import fontSize from "../../shared/theme/font-size";

interface Style {
  container: ViewStyle;
  buttonBlue: ViewStyle;
  buttonPink: ViewStyle;
  buttonWhite: ViewStyle;
  iconGlass: ViewStyle;
  searchContainer: ViewStyle;
  rowContainer: ViewStyle;
  text: TextStyle;
  subTitleText: TextStyle;
  boxTitleText: TextStyle;
  textInput: TextStyle;
  textDescription: TextStyle;
  textAreaContainer: ViewStyle;
  textArea: TextStyle;
  submitButton: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: color.light.black,
    alignItems: "center",
    flexDirection: "row",
  },
  buttonBlue: {
    backgroundColor: color.light.primary,
    marginTop: 5,
    marginRight: 0,
    marginLeft: 0,
  },
  buttonPink: {
    backgroundColor: color.light.primaryPink,
    marginBottom: 25,
    marginRight: 0,
    marginLeft: 0,
    marginTop: 5,
  },
  buttonWhite: {
    backgroundColor: color.light.white,
    marginRight: 0,
    marginLeft: 0,
    flex: 9,
  },
  iconGlass: {
    flex: 1,
    textAlign: "center",
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    marginTop: 10,
    fontSize: fontSize.verySmall,
    fontFamily: font.Roboto.regular,
  },
  textDescription: {
    fontSize: fontSize.small,
    marginTop: 10,
    color: color.light.LabelColor,
    fontFamily: font.Roboto.regular,
  },
  subTitleText: {
    fontFamily: font.Lato.bold,
    color: color.light.black,
    fontSize: fontSize.mediumLarge,
  },

  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    marginTop: 5,
  },
  textAreaContainer: {
    borderColor: color.light.black,
    borderWidth: 0.2,
    padding: 10,
    marginTop: 5,
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
  },
  submitButton: {
    backgroundColor: color.light.primaryPink,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 25,
  },
  boxTitleText: {
    alignSelf: "center",
    fontFamily: font.Lato.bold,
    color: color.light.black,
    fontSize: fontSize.mediumLarge,
  },
});
