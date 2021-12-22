import React, { Component } from "react";
import { View } from "react-native";
import styles from "./TicketsScreen.style";
import Text from "../../shared/components/text-wrapper/TextWrapper";

export default class TicketsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text h1> Tickets Screen </Text>
      </View>
    );
  }
}
