import React from "react";
import { TouchableOpacity, Text, ViewStyle } from "react-native";
import styles from "./button.style";

type PropsType = {
  buttonText: string;
  style: ViewStyle;
};

const Button = (props: PropsType): React.ReactElement => {
  const { buttonText, style } = props;
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Text style={styles.buttonTextStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
export default Button;
