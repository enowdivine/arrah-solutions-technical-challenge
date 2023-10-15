import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { TouchableOpacity } from "react-native";
import theme from "../../theme";

import { Entypo } from "@expo/vector-icons";
import ProductStack from "./ProductStack";
import AddProductStack from "./AddProductStack";

const Tabs = createMaterialBottomTabNavigator();

export default function AppStack() {
  return (
    <Tabs.Navigator
      barStyle={{ backgroundColor: "#fff" }}
      activeColor={theme.mainColor}
    >
      <Tabs.Screen
        name="Products"
        options={() => {
          return {
            tabBarButton: (props) => <TouchableOpacity {...props} />,
            tabBarHideOnKeyboard: true,
            tabBarIcon: ({ color }) => (
              <Entypo color={color} name="home" size={24} />
            ),
          };
        }}
        component={ProductStack}
      />
      <Tabs.Screen
        name="AddProducts"
        options={() => {
          return {
            tabBarButton: (props) => <TouchableOpacity {...props} />,
            tabBarHideOnKeyboard: true,
            tabBarIcon: ({ color }) => (
              <Entypo name="clipboard" size={23} color={color} />
            ),
          };
        }}
        component={AddProductStack}
      />
    </Tabs.Navigator>
  );
}
