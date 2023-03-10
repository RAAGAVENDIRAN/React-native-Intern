import React from "react";

import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import MateralCommunityIcons from "@expo/vector-icons";
import colors from "../config/colors";

export default function ListItemDeleteAction({}) {
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.container}>
      <MateralCommunityIcons name="trash-can" size={35} color="color.white" />
    </View>
  </TouchableWithoutFeedback>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
