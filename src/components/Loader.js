import React from "react";
import { ActivityIndicator } from "react-native";

function Loader() {
  return (
    <ActivityIndicator
      style={{
        alignItems: "center",
        flex: 1,
      }}
      size="large"
      color="#fff"
    />
  );
}

export default Loader;
