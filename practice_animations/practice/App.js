import React, { useRef, useState } from "react";
import { Button } from "react-native";
import { Animated, View, StyleSheet, Text, PanResponder } from "react-native";

const App = () => {
  const opacity = useRef(new Animated.Value(1)).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          { width: 100, height: 100, backgroundColor: "red" },
          { opacity: opacity },
        ]}
      />
      <Button
        title="Press Me"
        onPress={() => {
          Animated.timing(opacity, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: false,
          }).start();
        }}
      />
      <Button
        title="Press Me"
        onPress={() => {
          Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }).start();
        }}
      />
      {/* <Text style={styles.titleText}>Drag & Release this box!</Text>
      <Animated.View
        style={{ transform: [{ translateX: pan.x }, { translateY: pan.y }] }}
        {...panResponder.panHandlers}
      >
        <View style={styles.box} />
      </Animated.View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    height: 140,
    width: 140,
    backgroundColor: "red",
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold",
  },
});

export default App;
