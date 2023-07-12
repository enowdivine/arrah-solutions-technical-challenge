import React, { useState } from "react";
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
import theme from "../../../theme";

const Signup = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <View style={styles.wrapper}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>Create Coffee Account</Text>
        </View>
        <View style={styles.loginForm}>
          <View style={styles.textInputView}>
            <TextInput style={styles.textInput} placeholder="Enter username" />
          </View>
          <View style={styles.textInputView}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter phone number"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.textInputView}>
            <TextInput style={styles.textInput} placeholder="Enter email" />
          </View>
          <View style={styles.textInputView}>
            <TextInput style={styles.textInput} placeholder="Enter password" />
          </View>
          <View>
            {loading ? (
              <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => setLoading(!loading)}
              >
                <ActivityIndicator color="white" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => setLoading(!loading)}
              >
                <Text style={styles.loginText}>SIGN IN</Text>
              </TouchableOpacity>
            )}
          </View>
          <View>
            <Text style={styles.accountQues}>
              Don't have an account?{" "}
              <Text
                style={styles.signupLink}
                onPress={() => navigation.navigate("Login")}
              >
                Login
              </Text>
            </Text>
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headingText: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
    color: theme.mainColor,
  },
  loginForm: {
    width: 400,
    padding: 20,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
  },
  textInput: {
    backgroundColor: "#fff",
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  loginBtn: {
    width: "100%",
    backgroundColor: theme.mainColor,
    borderRadius: 10,
    padding: 15,
  },
  loginText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  accountQues: {
    marginTop: 20,
  },
  signupLink: {
    fontWeight: "bold",
    color: theme.mainColor,
  },
});

export default Signup;
