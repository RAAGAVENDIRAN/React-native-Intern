import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
} from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";

const SIZE = 100.0;

// const handleRotation = (progress: Animated.SharedValue<number>) =>{
//   'worklet';    //as it is javascript function specify it as worklet, so that it will xord
//   return `${progress.value * 2 * Math.PI}rad`;
// }

function App() {
  const progress = useSharedValue(1); //useSharedValue allows us to create a value that could be handled from the worklets so that it could be handled from UI thread.
  const scale = useSharedValue(2);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * SIZE) / 2,
      transform: [
        { scale: scale.value },
        { rotate: `${progress.value * 2 * Math.PI}rad` },
      ],
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5), -1, true); // -1 indicates repeat unlimimted times.
    scale.value = withRepeat(withSpring(1), -1, true); //true indiccates that the animation is reversed
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
