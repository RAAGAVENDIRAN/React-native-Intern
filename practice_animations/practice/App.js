import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Button,
  TouchableWithoutFeedback,
} from "react-native";

export default class animations extends Component {
  state = {
    animation: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 4000,
    }).start();
  }
  render() {
    const boxStyle = {
      backgroundColor: this.state.animation.interpolate({
        inputRange: [0, 1],
        outputRange: ["rgba(255,99,71, 1)", "blue"],
      }),
    };

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, boxStyle]}></Animated.View>
        <Button title="click color change" onPress={this.StartAni}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: "red",
  },
});
