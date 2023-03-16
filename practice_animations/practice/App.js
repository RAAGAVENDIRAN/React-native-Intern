import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
  useAnimatedGestureHandler,
} from "react-native-reanimated";

function App() {
  const Move = useSharedValue(0);

  const animationStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: Move.value }],
    };
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animationStyles]} />
      <Button
        title="Move"
        onPress={() => {
          Move.value = Math.random() * 255;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
});

export default App;
