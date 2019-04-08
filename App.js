import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.0000041
};

export default class App extends Component {
  constructor() {
    super();
    this.state = { inputValue: "", resultValue: 0.0 };
  }
  btnPressed = currency => {
    if (this.state.inputValue == "") {
      Alert.alert("Enter Some Value!!");
    } else {
      let result =
        parseFloat(this.state.inputValue) * currencyPerRupee[currency];
      this.setState({ resultValue: result.toFixed(2) });
    }
  };
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={Styles.container}>
          <View style={Styles.screenView}>
            <View style={Styles.resultContainer}>
              <Text style={Styles.resultValue}>{this.state.resultValue}</Text>
            </View>

            <View style={Styles.inputContainer}>
              <TextInput
                style={Styles.input}
                keyboardType="numeric"
                placeholder="Enter Value"
                placeholderTextColor="#fff"
                value={this.state.inputValue}
                onChangeText={inputValue => this.setState({ inputValue })}
              />
            </View>

            <View style={Styles.converterbtncontainer}>
              <TouchableOpacity
                onPress={() => this.btnPressed("DOLLAR")}
                style={Styles.converterbtn}
              >
                <Text style={Styles.converterbtnText}>$</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.btnPressed("EURO")}
                style={Styles.converterbtn}
              >
                <Text style={Styles.converterbtnText}>EURO</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.btnPressed("POUND")}
                style={Styles.converterbtn}
              >
                <Text style={Styles.converterbtnText}>POUND</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.btnPressed("RUBEL")}
                style={Styles.converterbtn}
              >
                <Text style={Styles.converterbtnText}>RUBEL</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.btnPressed("AUSDOLLAR")}
                style={Styles.converterbtn}
              >
                <Text style={Styles.converterbtnText}>AUS</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.btnPressed("CANDOLLAR")}
                style={Styles.converterbtn}
              >
                <Text style={Styles.converterbtnText}>CANADA</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.btnPressed("YEN")}
                style={Styles.converterbtn}
              >
                <Text style={Styles.converterbtnText}>YEN</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.btnPressed("DINAR")}
                style={Styles.converterbtn}
              >
                <Text style={Styles.converterbtnText}>DINAR</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.btnPressed("BITCOIN")}
                style={Styles.converterbtn}
              >
                <Text style={Styles.converterbtnText}>BITCOIN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#fff"
  },
  screenView: {
    flex: 1
  },
  resultContainer: {
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    borderColor: "#c1c1c1",
    backgroundColor: "#0A79DE",
    alignItems: "center",
    borderWidth: 2
  },
  resultValue: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff"
  },
  inputContainer: {
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c1c1c1",
    borderWidth: 2,
    backgroundColor: "#0A79DE"
  },
  input: {
    fontSize: 25,

    color: "#fff"
  },
  converterbtncontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    borderColor: "#c1c1c1",
    borderWidth: 2
  },
  converterbtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0A79DF",
    height: 100,
    borderColor: "#c1c1c1",
    borderWidth: 2,
    width: "33.3%"
  },
  converterbtnText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  }
});
