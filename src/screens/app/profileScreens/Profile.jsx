import React, { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import theme from "../../../../theme";

const Profile = () => {
  const [data, setData] = useState([
    {
      icon: "test",
      text: "Account Settings",
    },
    {
      icon: "test",
      text: "Change Password",
    },
    {
      icon: "test",
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
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>{item.text}</Text>
              </View>
            );
          }}
        />
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
});

export default Profile;
