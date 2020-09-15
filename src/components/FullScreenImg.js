import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";

export default function FullScreenImg({ route, navigation }) {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const key = Object.values(route.params);
  const [isLoading, setIsLoading] = useState(true);
  function _onLoad() {
    setIsLoading(false);
  }

  return (
    <View style={{ width: width, height: height, backgroundColor: "#3366FF" }}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("MainContent");
        }}
      >
        <Text
          style={[
            styles.arrow1,
            {
              transform: [{ rotateZ: "45deg" }],
            },
          ]}
        ></Text>
        <Text
          style={[
            styles.arrow2,
            {
              transform: [{ rotateZ: "-45deg" }],
            },
          ]}
        ></Text>
      </TouchableOpacity>

      {isLoading && (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      )}

      <Image
        onLoad={_onLoad}
        style={styles.backgroundImage}
        source={{
          uri: `${key}`,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 1,
    width: 50,
    height: 50,
  },

  arrow1: {
    backgroundColor: "#000099",
    position: "absolute",
    top: 10,
    left: 0,
    zIndex: 1,
    width: 20,
    height: 5,
  },

  arrow2: {
    backgroundColor: "#000099",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    width: 20,
    height: 5,
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  loading: {
    color: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    color: "#fff",
    fontSize: 25,
  },
});
