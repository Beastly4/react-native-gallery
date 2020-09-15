import React from "react";
import { View, StyleSheet, Text } from "react-native";

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Gallery</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 35,
    color: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: 5,
  },
  header: {
    flexDirection: "column",
    backgroundColor: "#000099",
    justifyContent: "flex-end",
    alignItems: "center",
    width: 100 + "%",
    height: 80,
  },
});

export default Header;
