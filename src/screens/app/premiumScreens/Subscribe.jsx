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
import config from "../../../../project.config";
import ModalSheet from "../../../components/ModalSheet";
// payment import
import { useDispatch } from "react-redux";
import { planSubscription } from "../../../redux/reducers/authReducer";
import { campayPayment } from "../../../redux/reducers/campay";
import Error from "../../../components/Error";
import Success from "../../../components/Success";
import { io } from "socket.io-client";

const Subscribe = ({
  showSubscribeModal,
  onCloseCancel,
  subscribeData,
  user,
}) => {
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [succMsg, setSuccMsg] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();

  const socket = io(config.ENDPOINT, {
    autoConnect: false,
  });

  const handleSubscribe = () => {
    if (phoneNumber === "") {
      setErrMsg("phone number is required");
      return;
    }
    try {
      socket.connect();
      socket.emit("join", "room");

      // adding number of days for subscription
      const numberOfDays = subscribeData.duration * 30;
      const currentDate = new Date();
      const startDataMilli = currentDate.setDate(currentDate.getDate());
      const endDateMilli = currentDate.setDate(
        currentDate.getDate() + numberOfDays
      );

      const data = {
        // amount: 2,
        amount: subscribeData.price,
        from: phoneNumber,
      };
      const userData = {
        id: user?._id,
        category: subscribeData.category,
        price: subscribeData.price,
        startDate: startDataMilli,
        endDate: endDateMilli,
      };
      dispatch(campayPayment(data), setLoading(true)).then(() => {
        socket
          .on("status", (status) => {
            if (status.status === "SUCCESSFUL") {
              setSuccMsg(`Processing payment, please wait.... `);
              dispatch(planSubscription(userData)).then((res) => {
                if (res.meta.requestStatus === "fulfilled") {
                  setSuccMsg("Subscription sucessful");
                  setPhoneNumber("");
                  setLoading(false);
                }
                if (res.meta.requestStatus === "rejected") {
                  setErrMsg(
                    "Failed to process subscription, please contact support"
                  );
                  setLoading(false);
                }
              });
            }
            if (status.status === "FAILED") {
              setErrMsg("Transaction incomplete");
              setLoading(false);
            }
          })
          .then(() => {
            socket.disconnect();
          });
      });
    } catch (error) {
      setLoading(false);
      return console.error("catch error", error);
    }
  };

  return (
    <ModalSheet
      //   animationType="slide"
      show={showSubscribeModal}
      onClose={onCloseCancel}
    >
      <View style={styles.modalContent}>
        <View style={styles.content}>
          <View style={styles.cancelDetails}>
            <Text>
              Subscribe to {subscribeData && subscribeData.category} plan
            </Text>
            <Text style={styles.cancelHeader}>Enter phone number</Text>
            <View style={styles.form}>
              <View style={styles.textInputView}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Phone number"
                  keyboardType="numeric"
                  onChangeText={(value) => setPhoneNumber(value)}
                />
              </View>
            </View>
          </View>
          {errMsg === null ? "" : <Error error={errMsg} />}
          {succMsg === null ? "" : <Success message={succMsg} />}
          {loading ? (
            <TouchableOpacity style={styles.cancelReservationBtnOpacity}>
              <ActivityIndicator color={theme.mainColor} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.cancelReservationBtnOpacity}
              onPress={handleSubscribe}
            >
              <Text style={styles.cancelReservationBtn}>Subscribe</Text>
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

export default Subscribe;
