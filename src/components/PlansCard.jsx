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

const PlansCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <FontAwesome5 name="rocket" color={theme.mainColor} size={53} />
        <Text style={styles.pro}>PRO</Text>
        <Text style={styles.plan}>
          XAF <Text style={styles.price}>20000</Text> for 1 year
        </Text>

        <Text style={styles.description}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          ipsa enim illo modi sint, praesentium optio maxime corrupti et,
          similique cum quibusdam? Id eius possimus ea molestiae numquam,
          repellat a?
        </Text>
        <TouchableOpacity style={styles.btn}>
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
  },
  wrapper: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc",
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
    fontSize: 50,
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
