import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { TouchableOpacity } from "react-native";
import {
  FontAwesome,
  Entypo,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
import theme from "../../theme";
import HomeStack from "./HomeStack";
import DiscoverStack from "./DiscoverStack";
import ProfileStack from "./ProfileStack";
import PremiumStack from "./PremiumStack";

const Tabs = createMaterialBottomTabNavigator();

const AppStack = () => {
  return (
    <Tabs.Navigator
      barStyle={{ backgroundColor: "#fff" }}
      activeColor={theme.mainColor}
    >
      <Tabs.Screen
        name="Home"
        options={() => {
          return {
            tabBarButton: (props) => <TouchableOpacity {...props} />,
            tabBarHideOnKeyboard: true,
            tabBarIcon: ({ color }) => (
              <Entypo color={color} name="home" size={24} />
            ),
          };
        }}
        component={HomeStack}
      />
      <Tabs.Screen
        name="Discover"
        options={() => {
          return {
            tabBarButton: (props) => <TouchableOpacity {...props} />,
            tabBarHideOnKeyboard: true,
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="search" color={color} size={23} />
            ),
          };
        }}
        component={DiscoverStack}
      />
      <Tabs.Screen
        name="Premium"
        options={() => {
          return {
            tabBarButton: (props) => <TouchableOpacity {...props} />,
            tabBarHideOnKeyboard: true,
            tabBarIcon: ({ color }) => (
              <AntDesign name="star" color={color} size={30} />
            ),
          };
        }}
        component={PremiumStack}
      />
      <Tabs.Screen
        name="Profile"
        options={() => {
          return {
            tabBarButton: (props) => <TouchableOpacity {...props} />,
            tabBarHideOnKeyboard: true,
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user-circle" size={24} color={color} />
            ),
          };
        }}
        component={ProfileStack}
      />
    </Tabs.Navigator>
  );
};

export default AppStack;
