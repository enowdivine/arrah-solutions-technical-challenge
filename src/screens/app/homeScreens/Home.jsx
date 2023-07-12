import React, { useState } from "react";
import theme from "../../../../theme";
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
import CoffeeListView from "../../../components/CoffeeListView";

const Home = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <View style={styles.container}>
      <View style={styles.homeTop}>
        <Text style={styles.greetings}>Hello Enow! </Text>
        <Text style={styles.startWithText}>Start with one of these</Text>
      </View>
      <View style={styles.soundList}>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return <CoffeeListView />;
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
    backgroundColor: "#ccc",
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
