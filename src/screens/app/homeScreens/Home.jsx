import React, { useState, useEffect, useRef } from "react";
import theme from "../../../../theme";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from "react-native";
import registerForPushNotifications from "../../../helpers/notification";
import CoffeeListView from "../../../components/CoffeeListView";
import { useDispatch, useSelector } from "react-redux";
import { sounds } from "../../../redux/reducers/soundReducer";
import { userDetails } from "../../../redux/reducers/authReducer";
import userId from "../../../shared/userId";

const Home = ({ navigation }) => {
  const notificationListener = useRef();
  const responseListener = useRef();
  const [refreshing, setRefreshing] = React.useState(false);
  const [allSounds, setSounds] = useState([]);
  const dispatch = useDispatch();
  const id = userId();

  const userObj = useSelector((state) => state.auth.user);
  const user = userObj?.user;

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
    registerForPushNotifications(
      id,
      dispatch,
      notificationListener,
      responseListener
    );
    dispatch(sounds()).then((res) => {
      setSounds(res.payload);
    });
    dispatch(userDetails(id));
  }, [id, dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.homeTop}>
        <Text style={styles.greetings}>Hello {user && user.firstName}! </Text>
        <Text style={styles.startWithText}>Start with one of these</Text>
      </View>
      <View style={styles.soundList}>
        <FlatList
          data={allSounds}
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
                  coverImage={item.coverImage.img}
                  track={item.filePath.snd}
                  category={item.category}
                  date={item.createdAt}
                />
              </TouchableOpacity>
            );
          }}
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
