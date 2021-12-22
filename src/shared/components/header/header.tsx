import React from "react";
import { View, Text } from "react-native";
import styles from "./header.style";

type PropsType = {
  headerText: string;
};

const Header = (props: PropsType): React.ReactElement => {
  const { headerText } = props;
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.titleTextStyle}>{headerText}</Text>
      </View>
    </View>
  );
};
export default Header;
