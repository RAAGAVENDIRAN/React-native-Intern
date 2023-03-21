import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function ProfileScreen() {
  return <View></View>;
}

function SettingsScreen({ route, navigation }) {
  const { user } = route.params;
  return (
    <View>
      <Text>Welcome {user}</Text>

      <Button
        title="go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}

function Mine({ navigation }) {
  return (
    <View>
      <Button
        title="go to settings"
        onPress={() => {
          navigation.navigate("Root", {
            screen: "Settings",
            params: { user: "raaga" },
          });
        }}
      />
    </View>
  );
}

function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Root" component={Root} />
        <Drawer.Screen name="Mine" component={Mine} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
