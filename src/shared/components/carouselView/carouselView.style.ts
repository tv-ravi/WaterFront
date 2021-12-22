import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  pinkImageBg: ViewStyle;
  grayImageBg: ViewStyle;
  blueImageBg: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
  },
  pinkImageBg: {
    flex: 1,
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  grayImageBg: {
    flex: 3,
    marginLeft: "5%",
    marginRight: "5%",
    paddingLeft: "5%",
    paddingRight: "5%",
    justifyContent: "center",
  },
  blueImageBg: {
    flex: 1,
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: 3,
    alignItems: "center",
    justifyContent: "center",
  },
});
