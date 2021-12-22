import { ViewStyle, StyleSheet, TextStyle } from "react-native";
import color from "../../shared/theme/colors";
import font from "../../shared/theme/fonts";
import fontSize from "../../shared/theme/font-size";

interface Style {
  mainContainer: ViewStyle;
  container: ViewStyle;
  headerContainer: ViewStyle;
  headerSubContainer: ViewStyle;
  headerText: TextStyle;
  headerRightContainer: ViewStyle;
  textRegular: TextStyle;
  underlineText: TextStyle;
  rightSubContainer: ViewStyle;
  icon: TextStyle;
  questionText: TextStyle;
  answerText: TextStyle;
}

export default StyleSheet.create<Style>({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
  },
  container: {
    flex: 1,
    marginBottom: 20,
  },
  headerContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  headerSubContainer: {
    width: "94%",
    justifyContent: "center",
    borderBottomWidth: 3,
    flexDirection: "row",
  },
  headerText: {
    marginTop: 45,
    flex: 1,
    marginBottom: 25,
    fontSize: fontSize.veryLarge,
    width: "60%",
    fontFamily: font.Lato.bold,
  },
  headerRightContainer: {
    flex: 4,
    marginTop: 45,
  },
  textRegular: {
    fontSize: fontSize.small,
    color: color.light.LabelColor,
    fontFamily: font.Roboto.regular,
  },
  underlineText: {
    fontSize: fontSize.small,
    alignSelf: "center",
    fontFamily: font.Roboto.regular,
    textDecorationLine: "underline",
    color: color.light.primary,
  },
  rightSubContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginTop: 5,
  },
  icon: {
    color: color.light.primaryPink,
  },
  questionText: {
    marginLeft: 15,
    fontSize: fontSize.medium,
    fontFamily: font.Roboto.regular,
  },
  answerText: {
    fontFamily: font.Roboto.regular,
    fontSize: fontSize.small,
    color: color.light.lightBlack,
    padding: 20,
  },
});
