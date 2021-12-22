import { ViewStyle, TextStyle, StyleSheet } from "react-native";
import color from "../../../shared/theme/colors";
import font from "../../../shared/theme/fonts";
import fontSize from "../../../shared/theme/font-size";
interface Style {
  container: ViewStyle;
  buttonTextStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    marginLeft: 10,
    marginRight: 10,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextStyle: {
    color: color.light.white,
    fontFamily: font.Roboto.bold,
    fontSize: fontSize.mediumLarge,
  },
});
