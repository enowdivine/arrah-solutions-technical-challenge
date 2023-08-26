import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ModalSheet from "../../../components/ModalSheet";

const PlanAction = ({ showActionModal, onCloseCancel }) => {
  return (
    <ModalSheet
      // animationType="slide"
      show={showActionModal}
      onClose={onCloseCancel}
    >
      <View style={styles.modalContent}>
        <View style={styles.content}>
          <View style={styles.icon}>
            <AntDesign name="exclamationcircleo" size={80} color="red" />
          </View>
          <View style={styles.cancelDetails}>
            <Text style={styles.cancelHeader}>Cancel Subscription</Text>
            <Text style={styles.cancelBody}>
              Are you sure you want to cancel your subscription? There will be
              no refunds at all.
            </Text>
          </View>
          <TouchableOpacity style={styles.cancelReservationBtnOpacity}>
            <Text style={styles.cancelReservationBtn}>Cancel Now</Text>
          </TouchableOpacity>
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

export default PlanAction;
