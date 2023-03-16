import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated,{
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";

const SIZE = 100.0;

function App() {
  const progress = useSharedValue(1); //useSharedValue allows us to create a value that could be handled from the worklets so that it could be handled from UI thread.

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
    };
  }, []);

  useEffect(() => {
    progress.value = withTiming(0, { duration: 5000 });
    console.log("Raaga");
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          { height: SIZE, width: SIZE, backgroundColor: "blue" },
          reanimatedStyle,
        ]}
      ></Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
