import React from "react";
import theme from "../../theme";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const PlansCard = ({ category, price, duration, desc, subBtn }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <FontAwesome5 name="rocket" color={theme.mainColor} size={53} />
        <Text style={styles.pro}>{category}</Text>
        <Text style={styles.plan}>
          XAF <Text style={styles.price}>{price}</Text> for {duration} month(s)
        </Text>

        <Text style={styles.description}>{desc}</Text>
        <TouchableOpacity style={styles.btn} onPress={subBtn}>
          <Text style={styles.btnText}>Subscribe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginHorizontal: 10,
    //
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  wrapper: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "whitesmoke",
    borderRadius: 20,
    paddingVertical: 40,
  },
  pro: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 15,
  },
  plan: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "red",
  },
  price: {
    fontSize: 40,
    color: theme.mainColor,
  },
  description: {
    fontSize: 17,
    textAlign: "center",
  },
  btn: {
    backgroundColor: theme.mainColor,
    width: "100%",
    borderRadius: 10,
    marginTop: 30,
  },
  btnText: {
    color: "white",
    width: "100%",
    fontWeight: "bold",
    padding: 20,
    paddingHorizontal: 80,
  },
});

export default PlansCard;
