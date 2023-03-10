import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  StatusBar,
  Button,
  Pressable,
  Alert,
  FlatList,
  Platform,
} from "react-native";

import Header from "./components/Header";
import AddToDo from "./components/AddToDo";
import ToDoItem from "./components/ToDoItem";
import RadioButton from "./components/RadioButton";

export default function App() {
  const [toDos, setTodos] = useState([
    { text: "jumping", key: 1 },
    { text: "walking", key: 2 },
    { text: "talking", key: 3 },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("OOPS!", "ToDos must be over 3 chars long", [
        { text: "Understood" },
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <AddToDo submitHandler={submitHandler} />
        <FlatList
          data={toDos}
          renderItem={({ item }) => (
            <View>
              <ToDoItem item={item} pressHandler={pressHandler} />
            </View>
          )}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  textInside: {
    borderWidth: 4,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
