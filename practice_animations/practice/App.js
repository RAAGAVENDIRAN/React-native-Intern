import React, { Component, useRef, useState } from "react";
import { Button, Easing, TouchableOpacity, Dimensions } from "react-native";
import { Animated, View, StyleSheet, Text, PanResponder } from "react-native";

var { width, height } = Dimensions.get("window");
export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      fadeValue: new Animated.Value(0),
      xValue: new Animated.Value(0),
    };
  }

  // _fadeAnimation = () => {
  //   Animated.timing(this.state.fadeValue, {
  //     toValue: 1,
  //     duration: 2000,
  //   }).start();
  // };

  // _fadeAnimationReverse = () => {
  //   Animated.timing(this.state.fadeValue, {
  //     toValue: 0,
  //     duration: 2000,
  //   }).start();
  // };

  _MoveRight = () => {
    Animated.timing(this.state.xValue, {
      toValue: width - 100,
      duration: 2000,

      asing: Easing.cubic,
    }).start(() => {
      Animated.timing(this.state.xValue, {
        toValue: 0,
        duration: 1000,

        asing: Easing.linear,
      }).start();
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <Animated.View
          style={[styles.animationView, { opacity: this.state.fadeValue }]}
        ></Animated.View> */}
        <Animated.View
          style={[
            styles.animationView,
            { left: this.state.xValue },
            // { opacity: this.state.fadeValue },
          ]}
        ></Animated.View>

        {/* <TouchableOpacity style={styles.button} onPress={this._fadeAnimation}>
          <Text style={styles.buttonText}>Animate</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this._fadeAnimationReverse}
        >
          <Text style={styles.buttonText}>Animate Back</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.button} onPress={this._MoveRight}>
          <Text style={styles.buttonText}>Move in X Axis Right</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
  },
  animationView: {
    height: 140,
    width: 140,
    backgroundColor: "red",
  },
  buttonText: {
    fontSize: 18,

    fontWeight: "bold",
    color: "white",
    padding: 12,
  },
  button: {
    backgroundColor: "steelblue",
    height: 45,
    marginTop: 20,
    alignSelf: "center",
  },
});
