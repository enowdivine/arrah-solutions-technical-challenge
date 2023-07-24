import React, { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import theme from "../../../../theme";
import CoffeGridView from "../../../components/CoffeGridView";

const Search = ({ navigation }) => {
  const playList = [
    {
      title:
        "Track one Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam consequatur",
      coverImage: `${require("../../../../assets/logo/coffee.jpeg")}`,
      track: `${require("../../../../assets/music/relaxing.mp3")}`,
      category: "category one",
      date: "20-04-2023 : 11:55",
    },
    {
      title: "Tract two Lorem Lorem ",
      coverImage: `${require("../../../../assets/logo/coffee2.jpeg")}`,
      track: `${require("../../../../assets/music/easy-lifestyle.mp3")}`,
      category: "category two",
      date: "20-04-2023 : 11:55",
    },
    {
      title:
        "Track one Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam consequatur",
      coverImage: `${require("../../../../assets/logo/coffee.jpeg")}`,
      track: `${require("../../../../assets/music/relaxing.mp3")}`,
      category: "category one",
      date: "20-04-2023 : 11:55",
    },
    {
      title:
        "Tract two Lorem Lorem one Lorem Lorem ipsum dolor sit, amet consectetur",
      coverImage: `${require("../../../../assets/logo/coffee2.jpeg")}`,
      track: `${require("../../../../assets/music/easy-lifestyle.mp3")}`,
      category: "category two",
      date: "20-04-2023 : 11:55",
    },
    {
      title:
        "Track one Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam consequatur",
      coverImage: `${require("../../../../assets/logo/coffee.jpeg")}`,
      track: `${require("../../../../assets/music/relaxing.mp3")}`,
      category: "category one",
      date: "20-04-2023 : 11:55",
    },
    {
      title: "Tract two Lorem Lorem Lorem ipsum",
      coverImage: `${require("../../../../assets/logo/coffee2.jpeg")}`,
      track: `${require("../../../../assets/music/easy-lifestyle.mp3")}`,
      category: "category two",
      date: "20-04-2023 : 11:55",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.searchTop}>
        <Text style={styles.title}>Discover More Sounds</Text>
        <TextInput placeholder={`Search...`} style={styles.searchInput} />
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
                <CoffeGridView
                  title={item.title}
                  coverImage={item.coverImage}
                  track={item.track}
                  category={item.category}
                  date={item.date}
                />
              </TouchableOpacity>
            );
          }}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
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
  searchTop: {
    width: "100%",
    backgroundColor: theme.mainColor,
    minHeight: 150,
    padding: 20,
    paddingTop: 30,
  },
  title: {
    color: "white",
    textAlign: "center",
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 22,
  },
  searchInput: {
    backgroundColor: "white",
    padding: 15,
    marginTop: 20,
    borderRadius: 10,
  },
  soundList: {
    width: "100%",
    flex: 1,
  },
});

export default Search;
