import React, { Component, useState } from "react";
import {
  SafeAreaView,
  Button,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen.js";
import ViewImageScreen from "./app/screens/ViewImageScreen.js";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton.js";
import MessagesScreen from "./app/screens/MessagesScreen";

import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen.js";
import { TextInput } from "react-native-web";

function App() {
  return <MessagesScreen />;
}

export default App;
