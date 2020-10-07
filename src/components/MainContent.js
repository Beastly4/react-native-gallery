import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
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
import { fetchImages } from "../redux/actions";
import Loader from "./Loader";

const MainContent = ({ navigation }) => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images[0]);
  const loader = useSelector((state) => state.loader.loading);

  useEffect(() => {
    dispatch(fetchImages());
  }, []);
  return (
    <View style={{ width: width, height: height, backgroundColor: "#3366FF" }}>
      <Header />
      {loader && <Loader />}

      <SafeAreaView style={styles.mainer}>
        <FlatList
          style={styles.container}
          showsVerticalScrollIndicator={false}
          data={images}
          keyExtractor={({ id }) => id}
          contentContainerStyle={{ paddingBottom: 180 }}
          renderItem={({ item }) => {
            return (
              <View>
                <TouchableOpacity
                  activeOpacity={1}
                  backgroundColor="#FFF"
                  onPress={() => {
                    navigation.navigate("FullScreenImg", {
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
    </View>
  );
};

export default MainContent;

const styles = StyleSheet.create({
  mainer: {
    alignItems: "center",
    flex: 0,
    marginHorizontal: 5,
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
