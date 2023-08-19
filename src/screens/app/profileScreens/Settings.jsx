import React, { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import {
  FontAwesome,
  Entypo,
  MaterialIcons,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
import theme from "../../../../theme";
import DeleteAccount from "./DeleteAccount";
import UpdateAccountDetails from "./UpdateAccountDetails";
import { useSelector } from "react-redux";

const Settings = ({ navigation }) => {
  const [deleteAccount, setDeleteAccount] = useState(false);
  const [userDetails, setUserDetails] = useState(false);

  const userObj = useSelector((state) => state.auth.user);
  const user = userObj?.user;

  return (
    <View>
      <View style={styles.settingsTop}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}
        >
          <Entypo name="chevron-left" size={26} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.heading}>Accounts Settings</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => setUserDetails(true)}
        >
          <FontAwesome5 name="user-circle" color={theme.mainColor} size={23} />
          <Text style={styles.itemText}>Edit Account Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => setDeleteAccount(true)}
        >
          <FontAwesome5 name="trash" color={theme.mainColor} size={23} />
          <Text style={styles.itemText}>Delete Account</Text>
        </TouchableOpacity>
      </View>
      <DeleteAccount
        showDeleteModal={deleteAccount}
        onCloseCancel={() => setDeleteAccount(false)}
      />
      <UpdateAccountDetails
        showUpdateModal={userDetails}
        onCloseCancel={() => setUserDetails(false)}
        user={user}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  settingsTop: {
    width: "100%",
    backgroundColor: theme.mainColor,
    minHeight: 110,
    padding: 20,
    paddingTop: 30,
  },
  heading: {
    color: "white",
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 20,
  },
  back: {
    backgroundColor: "#000",
    opacity: 0.5,
    borderRadius: 6,
    padding: 5,
    width: 30,
    marginTop: 20,
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    display: "flex",
    flexDirection: "row",
  },
  itemText: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10,
  },
});

export default Settings;
