import { ViewStyle, ImageStyle, TextStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    height: 700,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
