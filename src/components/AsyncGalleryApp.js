import React from "react";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainContent from "./MainContent";
import FullScreenImg from "./FullScreenImg";

const Stack = createStackNavigator();

export default function AsyncGalleryApp() {
  return (
    <NavigationContainer style={styles.app}>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="MainContent"
          component={MainContent}
        ></Stack.Screen>
        <Stack.Screen
          options={{
            headerStyle: {
              height: 0,
            },
            headerTitle: "",

            headerLeft: null,
          }}
          name="FullScreenImg"
          component={FullScreenImg}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: "#000099",
  },
});
