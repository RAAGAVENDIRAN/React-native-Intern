import React from "react";
import { Text, View, TextInput, StatusBar, Platform } from "react-native";

const app = () => {
  const [text, setValue] = React.useState("#f0f");
  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <TextInput
        multiline
        numberOfLines={5}
        style={{
          height: 40,
          width: 190,
          borderWidth: 1,
          backgroundColor: text,
        }}
        onChangeText={setValue}
        value={text}
      />
    </View>
  );
};

export default app;
