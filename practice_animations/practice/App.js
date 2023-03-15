import { statusBar } from "expo-status-bar";
import React, { useRef, useEffect } from "react";
import { Animated, Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.fadingContainer, { opacity: fadeAnim }]}>
        <Text style={styles.fadingText}>Fading View</Text>
      </Animated.View>
      <View>
        <Button title="Fade in View" onPress={fadeIn} />
        <Button title="Fade Out View" onPress={fadeOut} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  fadingText: {
    fontSize: 28,
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue",
  },
});
