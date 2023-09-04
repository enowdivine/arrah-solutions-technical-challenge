import React from "react";
import theme from "../../../theme";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.imageView}>
          <Image
            source={require("../../../assets/logo/digitalcoffeebrand.png")}
            style={styles.image}
          />
        </View>
        <View>
          <Text style={styles.text}>
            Welcome to our Digital Coffee, where you can find ultimate
            relaxation and tranquility at your fingertips. Unwind, rejuvenate,
            and experience a state of bliss like never before. Let our app be
            your sanctuary in the chaos of everyday life.
          </Text>
        </View>
        <View style={styles.authBtns}>
          <TouchableOpacity
            style={styles.signinBtn}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={styles.signinText}>SIGN UP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.loginText}>LOG IN</Text>
            {/* <ActivityIndicator size="small" color="white" /> */}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: 400,
    height: 120,
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    marginBottom: 20,
    marginTop: 40,
    paddingHorizontal: 10,
  },
  authBtns: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
  },
  signinBtn: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 20,
    paddingHorizontal: 40,
  },
  signinText: {
    fontWeight: "bold",
  },
  loginBtn: {
    borderRadius: 5,
    padding: 20,
    backgroundColor: theme.mainColor,
    paddingHorizontal: 40,
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
  },
});
