import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    borderWidth: 0.7,
    borderColor: "#d4cfcf",
    backgroundColor: "#ffffff",
    paddingTop: 20,
    paddingBottom: 30,
    width: "95%",
    paddingRight: 15,
    paddingLeft: 15,
    marginBottom: 20,
  },
});
