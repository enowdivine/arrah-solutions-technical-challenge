import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import theme from "../../../../theme";
import ModalSheet from "../../../components/ModalSheet";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../redux/reducers/authReducer";
import Success from "../../../components/Success";
import Error from "../../../components/Error";

const UpdateAccountDetails = ({ showUpdateModal, onCloseCancel, user }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setFirstName(user?.firstName);
    setLastName(user?.lastName);
    setEmail(user?.email);
    setPhoneNumber(user?.phoneNumber);
  }, [user]);

  const updateHandler = () => {
    setLoading(true);
    const data = {
      id: user?._id,
      firstName,
      lastName,
      phoneNumber,
      email,
    };
    dispatch(updateUser(data), setLoading(true))
      .then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          setSuccess("Account updated");
          setLoading(false);
        }
        if (res.meta.requestStatus === "rejected") {
          setError("Update Failed");
          setLoading(false);
        }
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };
  return (
    <ModalSheet
      // animationType="slide"
      show={showUpdateModal}
      onClose={onCloseCancel}
    >
      <View style={styles.modalContent}>
        <View style={styles.content}>
          <View style={styles.cancelDetails}>
            <Text style={styles.cancelHeader}>Account Details</Text>
            <View style={styles.form}>
              <View style={styles.textInputView}>
                <TextInput
                  style={styles.textInput}
                  placeholder="First name"
                  defaultValue={firstName}
                  onChangeText={(value) => setFirstName(value)}
                />
              </View>
              <View style={styles.textInputView}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Last name"
                  defaultValue={lastName}
                  onChangeText={(value) => setLastName(value)}
                />
              </View>
              <View style={styles.textInputView}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter phone number"
                  keyboardType="numeric"
                  defaultValue={phoneNumber}
                  onChangeText={(value) => setPhoneNumber(value)}
                />
              </View>
              <View style={styles.textInputView}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter email"
                  defaultValue={email}
                  onChangeText={(value) => setEmail(value)}
                />
              </View>
            </View>
          </View>
          {loading ? (
            <TouchableOpacity style={styles.cancelReservationBtnOpacity}>
              <ActivityIndicator color={theme.mainColor} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.cancelReservationBtnOpacity}
              onPress={updateHandler}
            >
              <Text style={styles.cancelReservationBtn}>Update Now</Text>
            </TouchableOpacity>
          )}
        </View>
        {error === null ? "" : <Error error={error} />}
        {success === null ? "" : <Success message={success} />}
      </View>
    </ModalSheet>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    height: "100%",
    width: "100%",
  },
  content: {
    padding: 15,
  },
  form: {
    marginTop: 20,
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
  cancelHeader: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 30,
  },

  cancelReservationBtnOpacity: {
    borderWidth: 2,
    borderRadius: 50,
    padding: 20,
    borderColor: theme.mainColor,
    marginTop: 40,
  },
  cancelReservationBtn: {
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
    color: theme.mainColor,
  },
});

export default UpdateAccountDetails;
