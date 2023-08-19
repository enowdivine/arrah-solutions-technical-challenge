import React, { useState } from "react";
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
import Success from "../../../components/Success";
import Error from "../../../components/Error";
import { useDispatch } from "react-redux";
import { updatePassword } from "../../../redux/reducers/authReducer";

const UpdatePassword = ({ showUpdatePasswordModal, onCloseCancel, user }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const updataPasswordHandler = () => {
    const data = {
      id: user?._id,
      currentPassword,
      newPassword,
    };
    dispatch(updatePassword(data), setLoading(true))
      .then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          setSuccess("password updated");
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
    <ModalSheet show={showUpdatePasswordModal} onClose={onCloseCancel}>
      <View style={styles.modalContent}>
        <View style={styles.content}>
          <View style={styles.cancelDetails}>
            <Text style={styles.cancelHeader}>Change Password</Text>
            <View style={styles.form}>
              <View style={styles.textInputView}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Current Password"
                  onChangeText={(value) => setCurrentPassword(value)}
                />
              </View>
              <View style={styles.textInputView}>
                <TextInput
                  style={styles.textInput}
                  placeholder="New Password"
                  onChangeText={(value) => setNewPassword(value)}
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
              onPress={updataPasswordHandler}
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

export default UpdatePassword;
