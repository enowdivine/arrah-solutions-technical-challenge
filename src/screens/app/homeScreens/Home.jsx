import React, { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { sounds } from "../../../redux/reducers/soundReducer";
import { userDetails } from "../../../redux/reducers/authReducer";
import userId from "../../../shared/userId";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const id = userId();

  const playList = [
    {
      title: "Relaxing",
      coverImage: `${require("../../../../assets/logo/coffee.jpeg")}`,
      track: `${require("../../../../assets/music/relaxing.mp3")}`,
      category: "category one",
      date: "20-04-2023 : 11:55",
    },
    {
      title: "Life style",
      coverImage: `${require("../../../../assets/logo/coffee2.jpeg")}`,
      track: `${require("../../../../assets/music/easy-lifestyle.mp3")}`,
      category: "category two",
      date: "20-04-2023 : 11:55",
    },
    {
      title: "coffee music",
      coverImage: `${require("../../../../assets/logo/coffee.jpeg")}`,
      track: `${require("../../../../assets/music/relaxing.mp3")}`,
      category: "category one",
      date: "20-04-2023 : 11:55",
    },
    {
      title: "Calm atmosphere",
      coverImage: `${require("../../../../assets/logo/coffee2.jpeg")}`,
      track: `${require("../../../../assets/music/easy-lifestyle.mp3")}`,
      category: "category two",
      date: "20-04-2023 : 11:55",
    },
    {
      title: "coffee music",
      coverImage: `${require("../../../../assets/logo/coffee.jpeg")}`,
      track: `${require("../../../../assets/music/relaxing.mp3")}`,
      category: "category one",
      date: "20-04-2023 : 11:55",
    },
    {
      title: "Calm atmosphere",
      coverImage: `${require("../../../../assets/logo/coffee2.jpeg")}`,
      track: `${require("../../../../assets/music/easy-lifestyle.mp3")}`,
      category: "category two",
      date: "20-04-2023 : 11:55",
    },
  ];
  const allsounds = useSelector((state) => state.sound.sounds);
  const user = useSelector((state) => state.auth.user);
  console.log(allsounds);
  console.log(id);
  console.log("user", user);

  useEffect(() => {
    dispatch(sounds());
    dispatch(userDetails(id));
  }, []);

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
    fontSize: 20,
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
