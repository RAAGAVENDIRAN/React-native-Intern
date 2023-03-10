import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";

export default function AddToDo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput style={styles.input} onChangeText={changeHandler} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => submitHandler(text)}
      >
        <Text style={styles.text}>AddToDo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    marginHorizontal: 30,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  button: {
    backgroundColor: "#fc5c65",
    borderRadius: 25,
    justifyContent: "center",
    alignSelf: "center",
    padding: 15,
    width: "30%",
    marginVertical: 10,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
    alignSelf: "center",
    justifyContent: "center",
  },
});
