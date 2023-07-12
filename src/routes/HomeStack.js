import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Home from "../screens/app/homeScreens/Home";

const HomeStackScreen = createStackNavigator();

const HomeStack = () => {
  return (
    <HomeStackScreen.Navigator
      screenOptions={() => ({
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      })}
    >
      <HomeStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="Homestack"
        component={Home}
      />
    </HomeStackScreen.Navigator>
  );
};

export default HomeStack;
