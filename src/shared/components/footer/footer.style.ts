import { ViewStyle, StyleSheet, TextStyle, Dimensions } from "react-native";

interface Style {
  footerContainer: ViewStyle;
  buttonStyle: ViewStyle;
  titleTextStyle: TextStyle;
  buttonTextStyle: TextStyle;
  footerIcon: TextStyle;
}
const { height: ScreenHeight } = Dimensions.get("window");

export default StyleSheet.create<Style>({
  footerContainer: {
    backgroundColor: "#000",
    width: "100%",
    height: ScreenHeight / 3 - 30,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  footerIcon: {
    width: "7%",
    marginRight: 4,
    resizeMode: "contain",
  },
  titleTextStyle: {
    fontSize: 32,
  },
  buttonStyle: {
    height: 45,
    width: "90%",
    marginTop: 32,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5931FF",
    shadowRadius: 5,
    shadowOpacity: 0.7,
    shadowColor: "#A58FFF",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  buttonTextStyle: {
    color: "#fdfdfd",
    fontWeight: "700",
  },
});
