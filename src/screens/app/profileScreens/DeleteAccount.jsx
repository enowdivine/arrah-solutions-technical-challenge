import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import theme from "../../../../theme";
import ModalSheet from "../../../components/ModalSheet";
import { useDispatch } from "react-redux";
import { deleteAccount } from "../../../redux/reducers/authReducer";
import Success from "../../../components/Success";
import Error from "../../../components/Error";

const DeleteAccount = ({ showDeleteModal, onCloseCancel, user }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const dispatch = useDispatch();

  const deleteHandler = () => {
    setLoading(true);
    const data = {
      id: user?._id,
    };
    dispatch(deleteAccount(data), setLoading(true))
      .then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          setLoading(false);
        }
        if (res.meta.requestStatus === "rejected") {
          setError("Reuest Failed");
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
      show={showDeleteModal}
      onClose={onCloseCancel}
    >
      <View style={styles.modalContent}>
        <View style={styles.content}>
          <View style={styles.icon}>
            <AntDesign name="exclamationcircleo" size={80} color="red" />
          </View>
          <View style={styles.cancelDetails}>
            <Text style={styles.cancelHeader}>Delete Account</Text>
            <Text style={styles.cancelBody}>
              Are you sure you want to delete your account? There will be no
              refunds at all.
            </Text>
          </View>
          {loading ? (
            <TouchableOpacity style={styles.cancelReservationBtnOpacity}>
              <ActivityIndicator color={theme.mainColor} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.cancelReservationBtnOpacity}
              onPress={deleteHandler}
            >
              <Text style={styles.cancelReservationBtn}>Delete Now</Text>
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
  titleContainer: {
    height: "6%",
    backgroundColor: "whitesmoke",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  cancelHeader: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 30,
  },
  cancelBody: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 15,
    color: "grey",
  },
  cancelReservationBtnOpacity: {
    borderWidth: 2,
    borderRadius: 50,
    padding: 20,
    borderColor: "red",
    marginTop: 40,
  },
  cancelReservationBtn: {
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
    color: "red",
  },
});

export default DeleteAccount;
