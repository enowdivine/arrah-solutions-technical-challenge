import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../shared/globalStyles";

const Success = ({ message }) => {
  return (
    <View style={globalStyles.successView}>
      <Text style={globalStyles.successText}>{message}</Text>
    </View>
  );
};

export default Success;
