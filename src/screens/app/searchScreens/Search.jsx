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
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <View style={styles.container}>
      <View style={styles.searchTop}>
        <Text style={styles.title}>Discover More Sounds</Text>
        <TextInput placeholder={`Search...`} style={styles.searchInput} />
      </View>
      <View style={styles.soundList}>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("AudioPlayer")}
              >
                <CoffeGridView />
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
