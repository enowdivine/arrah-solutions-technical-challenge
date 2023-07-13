import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Home from "../screens/app/homeScreens/Home";
import AudioPlayer from "../screens/app/homeScreens/AudioPlayer";

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
      {/* AUDIO PLAYER */}
      <HomeStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="AudioPlayer"
        component={AudioPlayer}
      />
    </HomeStackScreen.Navigator>
  );
};

export default HomeStack;
