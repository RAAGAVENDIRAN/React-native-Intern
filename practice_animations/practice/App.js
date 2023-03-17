import {
  GestureHandlerRootView,
  PinchGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from "react-native-reanimated";

import { Image, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const imageUri =
  "https://images.unsplash.com/photo-1678933964986-22090877ccf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

const AnimatedImage = Animated.createAnimatedComponent(Image); //creating image as animated to use inside pangesture handler

export default function App() {
  const scale = useSharedValue(1);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);

  const Pinch = useAnimatedGestureHandler({
    onActive: (event) => {
      scale.value = event.scale;
      focalX.value = event.focalX;
      focalY.value = event.focalY;
    },
    onEnd: () => {
      scale.value = withTiming(1);
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: focalX.value },
        { translateY: focalY.value },
        { translateX: -width / 2 },
        { translateY: -height / 2 },
        { scale: scale.value },

        { translateX: -focalX.value },
        { translateY: -focalY.value },
        { translateX: width / 2 },
        { translateY: height / 2 },
      ],
    };
  });

  //focal point is actally on the center of the image ,and the point where we actually to zoom with pinch effect , we wnat
  // that the image scaling happens in the focal point so we nee dto actually to use a trick , we want ,
  //that the scale happened with the focal point but we know that the scale  will always happen at the center of the image
  //so in order to pinch in the correct way, we need to center the image we need we need to fix the center of th image with focal point always and
  // after we need to scale when everything is done we need to reset back our translate values

  //to align focal point at the center of the image we need to translateX and translateY with the half of the image height and the image width.
  const focalPointStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: focalX.value }, { translateY: focalY.value }],
    };
  });
  return (
    //   //we are using gesture handler so we want to use Animated Image inside it. So above we want to create the image as amnimated
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PinchGestureHandler onGestureEvent={Pinch}>
        <Animated.View style={{ flex: 1 }}>
          <AnimatedImage
            style={[{ flex: 1 }, rStyle]}
            source={{ uri: imageUri }}
          />
          <Animated.View style={[StyleSheet.focalPoint, focalPointStyle]} />
        </Animated.View>
      </PinchGestureHandler>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  focalPoint: {
    ...StyleSheet.absoluteFillObject,
    width: 20,
    height: 20,
    backgroundColor: "blue",
    borderRadius: 10,
  },
});
