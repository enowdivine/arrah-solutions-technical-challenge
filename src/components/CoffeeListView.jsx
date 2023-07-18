import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import TextTicker from "react-native-text-ticker";

const CoffeeListView = ({ title, coverImage, category, date }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image source={coverImage} style={styles.image} />
      </View>
      <View style={styles.details}>
        <Text style={styles.category}>{category}</Text>
        <TextTicker
          width={300}
          duration={30000}
          loop
          bounce={false}
          style={styles.title}
        >
          {title}
        </TextTicker>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
    //
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 20,
  },
  details: {
    marginLeft: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default CoffeeListView;
