import { ViewStyle, TextStyle, StyleSheet } from "react-native";
import font from "../../../shared/theme/fonts";
import fontSize from "../../../shared/theme/font-size";

interface Style {
  container: ViewStyle;
  subContainer: ViewStyle;
  titleTextStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  subContainer: {
    width: "93%",
    justifyContent: "center",
    borderBottomWidth: 3,
  },
  titleTextStyle: {
    marginTop: 45,
    marginBottom: 25,
    fontSize: fontSize.veryLarge,
    width: "60%",
    fontFamily: font.Lato.bold,
  },
});
