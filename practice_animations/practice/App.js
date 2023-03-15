import React from "react";
import {
  NativeModules,
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  LayoutAnimation,
} from "react-native";
//Note that in order to get this to work on Android you need to set the following flags via UIManager:
//UIManager.setLayoutAnimationEnabledExperimental(true);

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends React.Component {
  state = {
    w: 40,
    h: 40,
  };

  makeBigger = () => {
    //Animate the update
    LayoutAnimation.spring();
    this.setState({ w: this.state.w + 15, h: this.state.h + 15 });
  };
  render() {
    return (
      <View style={styles.container}>
        <View
          style={[styles.box, { width: this.state.w, height: this.state.h }]}
        />
        <Button title="Grow Bigger" onPress={this.makeBigger} />
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
    width: 200,
    height: 200,
    backgroundColor: "red",
  },
  button: {
    backgroundColor: "black",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
