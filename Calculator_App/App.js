import { Component } from "react";
import {
  StyleSheet,
  Platform,
  StatusBar,
  Text,
  Button,
  View,
  TouchableOpacity,
} from "react-native";

export default class App extends Component {
  constructor() {
    super();
    this.state = { resultText: "", calculationText: "" };

    this.operation = ["DEL", "+", "-", "*", "/"];
  }

  calculateResult() {
    const text = this.state.resultText;
    // now parse this text ex - 3*3+1 ==>[3,*,3,+,1]
    //BODMAS
    this.setState({
      calculationText: eval(text),
    });
  }

  validate() {
    const text = this.state.resultText;
    switch (text.slice(-1)) {
      case "+":
      case "-":
      case "*":
      case "/":
        return false;
    }
    return true;
  }
  buttonPressed(text) {
    if (text == "=") {
      return this.validate() && this.calculateResult(this.state.resultText);
    }

    this.setState({
      resultText: this.state.resultText + text,
    });
  }

  operate(operations) {
    switch (operations) {
      case "DEL":
        const text = this.state.resultText.split("");
        text.pop();

        this.setState({
          resultText: text.join(""),
        });

        break;

      case "+":
      case "-":
      case "*":
      case "/":
        const lastChar = this.state.resultText.split("").pop();

        if (this.operations.indexOf(lastChar) > 0) return;
        if (this.state.text == "") return;
        this.setState({
          resultText: this.state.resultText + operations,
        });
    }
  }

  render() {
    let rows = [];
    let nums = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [".", 0, "="],
    ];
    for (let m = 0; m < 4; m++) {
      let row = [];
      for (let n = 0; n < 3; n++) {
        row.push(
          <TouchableOpacity
            key={nums[m][n]}
            onPress={() => this.buttonPressed(nums[m][n])}
            style={styles.btn}
          >
            <Text style={styles.btnText}>{nums[m][n]}</Text>
          </TouchableOpacity>
        );
      }
      rows.push(<View style={styles.row}>{row}</View>);
    }

    this.operations = ["DEL", "+", "-", "*", "/"];
    let spl = [];
    for (let i = 0; i < 5; i++) {
      spl.push(
        <TouchableOpacity
          key={this.operations[i]}
          style={styles.btn}
          onPress={() => this.operate(this.operations[i])}
        >
          <Text style={styles.splsty}>{this.operations[i]}</Text>
        </TouchableOpacity>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>
            {this.state.calculationText}
          </Text>
        </View>
        <View style={styles.button}>
          <View style={styles.numbers}>{rows}</View>
          <View style={styles.operations}>{spl}</View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  resultText: {
    fontSize: 40,
    color: "black",
  },
  btnText: {
    fontSize: 30,
    color: "white",
  },
  btn: {
    alignSelf: "stretch",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  calculationText: {
    fontSize: 35,
    color: "black",
  },
  row: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },

  result: {
    flex: 2,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "flex-end",
  },

  calculation: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  button: {
    flex: 7,
    flexDirection: "row",
  },

  splsty: {
    color: "white",
    fontSize: 30,
  },
  numbers: {
    flex: 3,
    backgroundColor: "#434343",
    justifyContent: "space-around",
  },
  operations: {
    flex: 1,
    backgroundColor: "#636363",
    justifyContent: "space-around",
    alignItems: "stretch",
  },
});
