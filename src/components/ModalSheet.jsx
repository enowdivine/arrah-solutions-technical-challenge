import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const ModalSheet = ({ show, onClose, title, children }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={show}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Pressable onPress={onClose}>
            <View
              style={{
                height: 7,
                backgroundColor: "#ccc",
                width: 50,
                borderRadius: 10,
              }}
            ></View>
          </Pressable>
        </View>
        <View style={styles.content}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    height: "80%",
    width: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  content: {
    padding: 15,
  },
  titleContainer: {
    height: "6%",
    backgroundColor: "#fff",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ModalSheet;
