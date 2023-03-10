import React from "react";
import { moduleName, Platform, StatusBar, View, Text } from "react-native";

export default function Header() {
  return (
    <View
      style={{
        height: 60,
        padding: 10,
        backgroundColor: "dodgerblue",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontStyle: "italic",
        }}
      >
        MyToDo
      </Text>
    </View>
  );
}
