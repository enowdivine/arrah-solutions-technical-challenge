import React, { useState } from "react";
import theme from "../../../../theme";
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import CoffeeListView from "../../../components/CoffeeListView";

const Home = ({ navigation }) => {
  const playList = [
    {
      title:
        "Track one Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam consequatur",
      coverImage: `${require("../../../../assets/logo/coffee.jpeg")}`,
      track: `${require("../../../../assets/music/track-one.mp3")}`,
      category: "category one",
      date: "20-04-2023 : 11:55",
    },
    {
      title: "Tract two Lorem Lorem ",
      coverImage: `${require("../../../../assets/logo/coffee2.jpeg")}`,
      track: `${require("../../../../assets/music/track-two.mp3")}`,
      category: "category two",
      date: "20-04-2023 : 11:55",
    },
    {
      title:
        "Track one Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam consequatur",
      coverImage: `${require("../../../../assets/logo/coffee.jpeg")}`,
      track: `${require("../../../../assets/music/track-one.mp3")}`,
      category: "category one",
      date: "20-04-2023 : 11:55",
    },
    {
      title:
        "Tract two Lorem Lorem one Lorem Lorem ipsum dolor sit, amet consectetur",
      coverImage: `${require("../../../../assets/logo/coffee2.jpeg")}`,
      track: `${require("../../../../assets/music/track-two.mp3")}`,
      category: "category two",
      date: "20-04-2023 : 11:55",
    },
    {
      title:
        "Track one Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam consequatur",
      coverImage: `${require("../../../../assets/logo/coffee.jpeg")}`,
      track: `${require("../../../../assets/music/track-one.mp3")}`,
      category: "category one",
      date: "20-04-2023 : 11:55",
    },
    {
      title: "Tract two Lorem Lorem Lorem ipsum",
      coverImage: `${require("../../../../assets/logo/coffee2.jpeg")}`,
      track: `${require("../../../../assets/music/track-two.mp3")}`,
      category: "category two",
      date: "20-04-2023 : 11:55",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.homeTop}>
        <Text style={styles.greetings}>Hello Enow! </Text>
        <Text style={styles.startWithText}>Start with one of these</Text>
      </View>
      <View style={styles.soundList}>
        <FlatList
          data={playList}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("AudioPlayer", {
                    item,
                  })
                }
              >
                <CoffeeListView
                  title={item.title}
                  coverImage={item.coverImage}
                  track={item.track}
                  category={item.category}
                  date={item.date}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  homeTop: {
    width: "100%",
    backgroundColor: theme.mainColor,
    minHeight: 150,
    padding: 20,
    paddingTop: 30,
  },
  greetings: {
    color: "white",
    marginTop: 30,
    fontWeight: "bold",
    fontSize: 25,
  },
  startWithText: {
    color: "white",
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 25,
  },
  soundList: {
    width: "100%",
    flex: 1,
  },
});

export default Home;
