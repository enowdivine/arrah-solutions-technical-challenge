import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import {
  FontAwesome,
  Entypo,
  MaterialIcons,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
import theme from "../../../../theme";

const Profile = ({ navigation }) => {
  const [data, setData] = useState([
    {
      icon: "user-circle",
      text: "Account Settings",
    },
    {
      icon: "lock",
      text: "Change Password",
    },
    {
      icon: "contact-support",
      text: "Help & Support",
    },
    {
      icon: "test",
      text: "About",
    },
    {
      icon: "test",
      text: "Logout",
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.profileTop}>
        <Text style={styles.heading}>Profile</Text>
      </View>
      <View style={styles.profileList}>
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => navigation.navigate("Settings")}
        >
          <FontAwesome5 name="user-circle" color={theme.mainColor} size={25} />
          <Text style={styles.itemText}>Account Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <FontAwesome5 name="lock" color={theme.mainColor} size={25} />
          <Text style={styles.itemText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <MaterialIcons
            name="contact-support"
            color={theme.mainColor}
            size={25}
          />
          <Text style={styles.itemText}>Help & Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <MaterialIcons
            name="contact-support"
            color={theme.mainColor}
            size={25}
          />
          <Text style={styles.itemText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <MaterialIcons name="logout" color={theme.mainColor} size={25} />
          <Text style={styles.itemText}>Logout</Text>
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
  profileTop: {
    width: "100%",
    backgroundColor: theme.mainColor,
    minHeight: 100,
    padding: 20,
    paddingTop: 30,
  },
  heading: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 20,
    textAlign: "center",
  },
  profileList: {
    width: "100%",
    flex: 1,
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

export default Profile;
