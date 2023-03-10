import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ item, pressHandler }) {
  return (
    <View style={styles.item}>
      <MaterialIcons
        name="delete"
        size={18}
        color="#333"
        onPress={() => pressHandler(item.key)}
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    marginHorizontal: 30,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row",
  },

  itemText: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "100",
  },
});
