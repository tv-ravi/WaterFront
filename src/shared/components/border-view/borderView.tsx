import React from "react";
import { View, ViewStyle } from "react-native";
import styles from "./borderView.style";
// type PropsType = {
//   childComp?: React.ReactNode;
// };
interface viewPropType {
  childComp?: React.ReactNode | undefined;
  styleProps?: ViewStyle | undefined;
}
// type ViewProps = React.ComponentProps<typeof View>

const BorderView: React.FC<viewPropType> = ({ childComp, styleProps }) => {
  return <View style={[styles.container, styleProps]}>{childComp}</View>;
};
export default BorderView;
