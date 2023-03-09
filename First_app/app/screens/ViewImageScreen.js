import React from "react";
import { StyleSheet, Image, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function ViewImageScreen(props) {
  return (
    <View style={Styles.Container}>
      <View style={Styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={30} />
      </View>
      <View style={Styles.deleteIcon}>
        <MaterialCommunityIcons name="delete" color="white" size={30} />
      </View>
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
    position: "absolute",
    top: 40,
    left: 30,
  },
  Container: {
    backgroundColor: colors.black,
    flex: 1,
  },

  deleteIcon: {
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
