import React from "react";
import { StyleSheet, Image, View } from "react-native";
import colors from "../config/colors";

// import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={Styles.Container}>
      <View style={Styles.closeIcon}></View>
      <View style={Styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={Styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  Container: {
    backgroundColor: colors.black,
    flex: 1,
  },

  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
