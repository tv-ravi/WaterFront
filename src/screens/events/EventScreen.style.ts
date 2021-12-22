import { ViewStyle, StyleSheet, TextStyle } from "react-native";
import font from "../../shared/theme/fonts";
import fontSize from "../../shared/theme/font-size";

interface Style {
  container: ViewStyle;
  titleTextStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    marginTop: 2,
  },
  titleTextStyle: {
    marginTop: 15,
    marginBottom: 5,
    fontSize: fontSize.veryLarge,
    width: "100%",
    fontFamily: font.Lato.bold,
  },
});
