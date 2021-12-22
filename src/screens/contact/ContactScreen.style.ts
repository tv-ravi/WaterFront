import { ViewStyle, StyleSheet, TextStyle, ImageStyle } from "react-native";
import color from "../../shared/theme/colors";
import font from "../../shared/theme/fonts";
import fontSize from "../../shared/theme/font-size";

interface Style {
  container: ViewStyle;
  text: TextStyle;
  textInput: TextStyle;
  submitButton: TextStyle;
  subTitleText: TextStyle;
  textDescription: TextStyle;
  textRegular: TextStyle;
  underlineText: TextStyle;
  mediaIcon: ImageStyle;
  subHeadingText: TextStyle;
  alignStartText: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    alignSelf: "center",
  },
  text: {
    marginTop: 10,
    fontSize: fontSize.verySmall,
    fontFamily: font.Roboto.regular,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    marginTop: 5,
  },
  submitButton: {
    backgroundColor: color.light.primaryPink,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 35,
  },
  subTitleText: {
    fontFamily: font.Lato.bold,
    paddingRight: 5,
    paddingLeft: 25,
    color: color.light.black,
    fontSize: fontSize.mediumLarge,
  },
  textDescription: {
    fontSize: fontSize.small,
    marginTop: 10,
    paddingRight: 5,
    paddingLeft: 20,
    fontFamily: font.Roboto.regular,
  },
  textRegular: {
    fontSize: fontSize.small,
    fontFamily: font.Roboto.regular,
  },
  underlineText: {
    fontSize: fontSize.small,
    alignSelf: "center",
    fontFamily: font.Roboto.regular,
    textDecorationLine: "underline",
    color: color.light.primary,
  },
  mediaIcon: {
    width: "7%",
    height: 30,
    marginRight: 10,
    marginLeft: 25,
    resizeMode: "contain",
  },
  subHeadingText: {
    fontSize: fontSize.small,
    marginTop: 10,
    paddingRight: 5,
    paddingLeft: 25,
    fontFamily: font.Roboto.bold,
  },
  alignStartText: {
    alignSelf: "flex-start",
    marginLeft: 25,
  },
});
