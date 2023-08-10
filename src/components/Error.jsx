import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../shared/globalStyles";

const Error = ({ error }) => {
  return (
    <View style={globalStyles.errorView}>
      <Text style={globalStyles.errorText}>{error}</Text>
    </View>
  );
};

export default Error;
