import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";

export default function MainContent({ navigation }) {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const URL =
    "https://api.unsplash.com/photos/?client_id=tCdVGtO8jGpBL3JxrGUYoLCVpVOuI5VXd1TfMjkMz8g";

  useEffect(() => {
    async function request() {
      let response = await fetch(URL);
      let responseJson = await response.json();
      setData(responseJson);
      setIsLoading(false);
      return responseJson;
    }
    request();
  }, []);
  return (
    <View style={styles.mainContent}>
      <Header />
      {!isLoading ? (
        <SafeAreaView style={styles.mainer}>
          <FlatList
            style={styles.container}
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={({ id }, index) => id}
            contentContainerStyle={{ paddingBottom: 180 }}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity
                    activeOpacity={1}
                    backgroundColor="#FFF"
                    onPress={() => {
                      navigation.navigate("FullScreenImage", {
                        url: item.urls.full,
                      });
                    }}
                  >
                    <Image
                      style={styles.image}
                      source={{
                        uri: item.urls.small,
                      }}
                    />
                  </TouchableOpacity>
                  <Text style={styles.author}>{item.user.name}</Text>
                  <Text style={styles.description}>
                    {item.description || item.alt_description}
                  </Text>
                </View>
              );
            }}
          />
        </SafeAreaView>
      ) : (
        <View
          style={{
            alignItems: "center",
            width: width,
            height: height,
          }}
        >
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainer: {
    alignItems: "center",
    flex: 0,
    marginHorizontal: 5,
  },
  mainContent: {
    backgroundColor: "#3366FF",
  },
  container: {
    paddingTop: 30,
  },
  image: {
    height: 200,
    marginBottom: 15,
    alignSelf: "stretch",
  },
  author: {
    color: "#fff",
    marginBottom: 10,
    fontSize: 20,
  },
  description: {
    color: "#fff",
    marginBottom: 10,
    fontSize: 15,
    paddingBottom: 10,
  },

  loadingText: {
    color: "#fff",
    fontSize: 25,
    paddingTop: 100,
  },
});
