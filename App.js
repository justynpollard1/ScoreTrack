import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import Home from "./screens/home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import * as ScreenOrientation from "expo-screen-orientation";
ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
