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

const UpdatePassword = ({ showUpdatePasswordModal, onCloseCancel }) => {
  const [loading, setLoading] = useState(false);

  return (
    <ModalSheet
      //   animationType="slide"
      show={showUpdatePasswordModal}
      onClose={onCloseCancel}
    >
      <View style={styles.modalContent}>
        <View style={styles.content}>
          <View style={styles.cancelDetails}>
            <Text style={styles.cancelHeader}>Change Password</Text>
            <View style={styles.form}>
              <View style={styles.textInputView}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Current Password"
                />
              </View>
              <View style={styles.textInputView}>
                <TextInput
                  style={styles.textInput}
                  placeholder="New Password"
                />
              </View>
            </View>
          </View>
          {loading ? (
            <TouchableOpacity
              style={styles.cancelReservationBtnOpacity}
              onPress={() => setLoading(!loading)}
            >
              <ActivityIndicator color={theme.mainColor} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.cancelReservationBtnOpacity}
              onPress={() => setLoading(!loading)}
            >
              <Text style={styles.cancelReservationBtn}>Update Now</Text>
            </TouchableOpacity>
          )}
        </View>
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
