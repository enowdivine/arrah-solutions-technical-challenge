import React, { useState, useEffect } from "react";
import {
  RefreshControl,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import theme from "../../../../theme";
import CoffeGridView from "../../../components/CoffeGridView";
import { useDispatch, useSelector } from "react-redux";
import { sounds, findSounds } from "../../../redux/reducers/soundReducer";
import { userDetails } from "../../../redux/reducers/authReducer";
import userId from "../../../shared/userId";

const Search = ({ navigation }) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [allSounds, setSounds] = useState([]);
  // state object for checking plans
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const id = userId();

  const onRefreshFuntion = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      dispatch(sounds()).then((res) => {
        setSounds(res.payload);
      });
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    dispatch(sounds()).then((res) => {
      setSounds(res.payload);
    });
    dispatch(userDetails(id)).then((res) => {
      setUser(res.payload.user);
    });
  }, [id]);

  const handleChange = (value) => {
    dispatch(findSounds(value)).then((res) => {
      setSounds(res.payload);
    });
  };

  const playAudio = (item) => {
    if (user && item) {
      if (item.premium === "free") {
        navigation.navigate("AudioPlayer", {
          item,
        });
      } else {
        if (user?.subscription.plan === "free") {
          return alert("Subscrbe to plan to access this sound");
        }
        if (user?.subscription.plan !== "free") {
          navigation.navigate("AudioPlayer", {
            item,
          });
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchTop}>
        <Text style={styles.title}>Discover More Sounds</Text>
        <TextInput
          placeholder={`Search...`}
          style={styles.searchInput}
          onChangeText={(value) => handleChange(value)}
        />
      </View>
      <View style={styles.soundList}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={allSounds}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => playAudio(item)}>
                <CoffeGridView
                  title={item.title}
                  coverImage={item.coverImage?.img}
                  track={item.filePath?.snd}
                  category={item.category}
                  date={item.createdAt}
                />
              </TouchableOpacity>
            );
          }}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={
            <RefreshControl
              onRefresh={onRefreshFuntion}
              refreshing={refreshing}
            />
          }
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
    paddingHorizontal: 15,
    paddingVertical: 6,
    marginTop: 20,
    borderRadius: 10,
  },
  soundList: {
    // width: "100%",
    flex: 1,
  },
});

export default Search;
