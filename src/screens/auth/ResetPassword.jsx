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
import { useDispatch } from "react-redux";
import { resetPassword } from "../../redux/reducers/authReducer";
import Error from "../../components/Error";

const ResetPassword = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const dispatch = useDispatch();

  const resetPasswordHandler = () => {
    if (phoneNumber && phoneNumber) {
      const data = {
        phoneNumber,
        newPassword,
      };
      dispatch(resetPassword(data), setLoading(true))
        .then((res) => {
          if (res.meta.requestStatus === "fulfilled") {
            setLoading(false);
            navigation.navigate("Login");
          }
          if (res.meta.requestStatus === "rejected") {
            setError("update password failed");
            setLoading(false);
          }
        })
        .catch((err) => {
          setError("Reset password failed");
          setLoading(false);
        });
    } else {
      setError("all fields are required");
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
          <Text style={styles.headingText}>Reset Coffee Password?</Text>
        </View>
        <View style={styles.loginForm}>
          <View style={styles.textInputView}>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              placeholder="Enter phone number"
              onChangeText={(value) => setPhoneNumber(value)}
            />
          </View>
          <View style={styles.textInputView}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter new password"
              onChangeText={(value) => setNewPassword(value)}
            />
          </View>
          <View>
            {loading ? (
              <TouchableOpacity style={styles.loginBtn}>
                <ActivityIndicator color="white" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.loginBtn}
                onPress={resetPasswordHandler}
              >
                <Text style={styles.loginText}>Reset Password</Text>
              </TouchableOpacity>
            )}
          </View>
          {error === null ? "" : <Error error={error} />}
          <View>
            <Text style={styles.accountQues}>
              Recall password?{" "}
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

export default ResetPassword;
