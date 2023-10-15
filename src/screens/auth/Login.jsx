import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Loading from "../../components/Loading";
import { useDispatch } from "react-redux";
import theme from "../../../theme";
import { LoginReducer } from "../../redux/reducers/authReducer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const LoginHandler = () => {
    if (email && password) {
      const data = {
        email,
        password,
      };
      dispatch(LoginReducer(data))
        .then(() => {
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      console.error("All fields are required");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.authForm}>
        <Text style={styles.header}>Enter Details To Login</Text>
        <View style={styles.inputView}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            onChangeText={(value) => setEmail(value)}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordInputView}>
            <TextInput
              style={styles.passwordInput}
              secureTextEntry={showPassword ? false : true}
              placeholder="********"
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
        <TouchableOpacity onPress={LoginHandler} style={styles.submitBtn}>
          {loading ? (
            <Loading size="small" color="#fff" />
          ) : (
            <Text style={styles.loginText}>Sign In</Text>
          )}
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
  },
  header: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 30,
    fontSize: 25,
  },
  authForm: {
    padding: 30,
    width: "100%",
    backgroundColor: "#f4f4f4",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  label: {
    marginHorizontal: 10,
    marginVertical: 5,
    color: "grey",
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
  },
  passwordInputView: {
    backgroundColor: "#fff",
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    flexDirection: "row",
  },
  passwordInput: { flexGrow: 1 },
  submitBtn: {
    backgroundColor: theme.mainColor,
    width: "100%",
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },
  loginText: { color: "white", textAlign: "center" },
});

export default Login;
