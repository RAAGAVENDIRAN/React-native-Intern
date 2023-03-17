import React, { useRef, useCallback } from "react";

import {
  StyleSheet,
  View,
  Button,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";
import {
  GestureHandlerRootView,
  TapGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withDelay,
} from "react-native-reanimated";

const AnimatedImage = Animated.createAnimatedComponent(Image);
export default function App() {
  const scale = useSharedValue(0);
  const doubleTapRef = useRef();
  const opacity = useSharedValue(1);

  const rStyle = useAnimatedStyle(() => ({
    transform: [{ scale: Math.max(scale.value, 0) }],
  }));

  const rTextStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const onDoubleTap = useCallback(() => {
    scale.value = withSpring(1, undefined, (isFinished) => {
      if (isFinished) {
        scale.value = withDelay(500, withSpring(0));
      }
    });
  }, []);

  const onSingleTap = useCallback(() => {
    opacity.value = withSpring(0, undefined, (isFinished) => {
      if (isFinished) {
        opacity.value = withDelay(500, withSpring(1));
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <GestureHandlerRootView>
        <TapGestureHandler waitFor={doubleTapRef} onActivated={onSingleTap}>
          <TapGestureHandler
            maxDelayMs={250}
            ref={doubleTapRef}
            numberOfTaps={2}
            onActivated={onDoubleTap}
          >
            <Animated.View>
              <ImageBackground
                source={{
                  uri: "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
                }}
                style={styles.image}
              >
                <AnimatedImage
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/535/535183.png",
                  }}
                  style={[
                    styles.image,
                    {
                      shadowOffset: { width: 0, height: 20 },
                      shadowRadius: 35,
                      shadowOpacity: 0.3,
                    },
                    rStyle,
                  ]}
                  resizeMode={"center"}
                />
              </ImageBackground>
              <Animated.Text style={[styles.stars, rTextStyle]}>
                ⭐⭐⭐⭐
              </Animated.Text>
            </Animated.View>
          </TapGestureHandler>
        </TapGestureHandler>
      </GestureHandlerRootView>
    </View>
  );
}

const { width: SIZE } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: SIZE,
    height: SIZE,
  },
  stars: {
    fontSize: 40,
    textAlign: "center",
    marginTop: 30,
  },
});
