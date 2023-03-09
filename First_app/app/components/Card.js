import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";

import AppText from "./AppText";

function Card({ title, subTitle, image }) {
  return (
    <View style={Styles.card}>
      <Image style={Styles.image} source={image} />
      <View style={Styles.detailsContainer}>
        <AppText style={Styles.title}>{title}</AppText>
        <AppText style={Styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },

  detailsContainer: {
    padding: 20,
  },

  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },

  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },

  title: {
    marginBottom: 6,
  },
});

export default Card;
