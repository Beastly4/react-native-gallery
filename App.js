import React from "react";
import { StyleSheet, View } from "react-native";
import MainContent from "./src/components/MainContent";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FullScreenImage from "./src/components/FullScreenImg";

const Stack = createStackNavigator();

export default function App() {
  // createStack = () => {
  //   return (
  //     <Stack.Navigator>
  //       <Stack.Screen name="MainContent" component={MainContent}></Stack.Screen>
  //       <Stack.Screen
  //         name="FullScreenImage"
  //         component={FullScreenImage}
  //       ></Stack.Screen>
  //     </Stack.Navigator>
  //   );
  // };
  return (
    // <View >

    <NavigationContainer style={styles.app}>
      {/* <Header /> */}
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
          name="FullScreenImage"
          component={FullScreenImage}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    // </View>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: "#000099",
  },
});
