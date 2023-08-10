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
import { login } from "../../redux/reducers/authReducer";
import Error from "../../components/Error";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const loginHandler = async () => {
    if (phoneNumber && password) {
      try {
        const data = {
          phoneNumber,
          password,
        };
        dispatch(login(data), setLoading(true)).then((res) => {
          if (res.meta.requestStatus === "rejected") {
            setError("Signup Failed");
            setLoading(false);
          }
        });
      } catch (error) {
        setError("An error occured");
        setLoading(false);
      }
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
          <Text style={styles.headingText}>Digital Coffee Login</Text>
        </View>
        <View style={styles.loginForm}>
          <View style={styles.textInputView}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter phone number"
              keyboardType="numeric"
              onChangeText={(value) => setPhoneNumber(value)}
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
              <TouchableOpacity style={styles.loginBtn} onPress={loginHandler}>
                <Text style={styles.loginText}>LOG IN</Text>
              </TouchableOpacity>
            )}
          </View>
          {error === null ? "" : <Error error={error} />}
          <View>
            <Text style={styles.accountQues}>
              Don't have an account?{" "}
              <Text
                style={styles.signupLink}
                onPress={() => navigation.navigate("Signup")}
              >
                Signup
              </Text>
            </Text>
          </View>
          <View>
            <Text style={styles.accountQues}>
              Forgot password?{" "}
              <Text
                style={styles.signupLink}
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                Click here
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

export default Login;
