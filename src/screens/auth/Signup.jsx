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
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../../shared/globalStyles";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/reducers/authReducer";
import Error from "../../components/Error";

const Signup = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const SignupHandler = () => {
    if (firstName && lastName && phoneNumber && email && password) {
      const data = {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
      };
      dispatch(signup(data), setLoading(true))
        .then((res) => {
          if (res.meta.requestStatus === "fulfilled") {
            setLoading(false);
          }
          if (res.meta.requestStatus === "rejected") {
            setError("Signup Failed");
            setLoading(false);
          }
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    } else {
      setError("All fields are required");
      setLoading(false);
    }
  };

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
            <TextInput
              style={styles.textInput}
              placeholder="First name"
              onChangeText={(value) => setFirstName(value)}
            />
          </View>
          <View style={styles.textInputView}>
            <TextInput
              style={styles.textInput}
              placeholder="Last name"
              onChangeText={(value) => setLastName(value)}
            />
          </View>
          <View style={styles.textInputView}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter phone number"
              keyboardType="numeric"
              onChangeText={(value) => setPhoneNumber(value)}
            />
          </View>
          <View style={styles.textInputView}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter email"
              onChangeText={(value) => setEmail(value)}
            />
          </View>
          <View style={globalStyles.inputView}>
            <View style={globalStyles.passwordInputView}>
              <TextInput
                style={globalStyles.passwordInput}
                secureTextEntry={showPassword ? false : true}
                placeholder="Enter password"
                onChangeText={(value) => setPassword(value)}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                  name={showPassword ? "eye-off" : "eye"}
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            {loading ? (
              <TouchableOpacity style={styles.loginBtn}>
                <ActivityIndicator color="white" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.loginBtn} onPress={SignupHandler}>
                <Text style={styles.loginText}>SIGN UP</Text>
              </TouchableOpacity>
            )}
          </View>
          {error === null ? "" : <Error error={error} />}
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
