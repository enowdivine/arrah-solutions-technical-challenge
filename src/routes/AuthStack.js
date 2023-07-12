import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Welcome from "../screens/auth/Welcome";
import Login from "../screens/auth/Login";
import Signup from "../screens/auth/Signup";
import ForgotPassword from "../screens/auth/ForgotPassword";

const AuthStackScreen = createStackNavigator();

const AuthStack = () => {
  return (
    <AuthStackScreen.Navigator
      screenOptions={() => ({
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      })}
    >
      {/* WELCOME SCREEN */}
      <AuthStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="Welcome"
        component={Welcome}
      ></AuthStackScreen.Screen>

      {/* LOGIN SCREEN */}
      <AuthStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="Login"
        component={Login}
      ></AuthStackScreen.Screen>

      {/* SIGNUP SCREEN */}
      <AuthStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="Signup"
        component={Signup}
      ></AuthStackScreen.Screen>

      {/* FORGOT PASSWORD SCREEN */}
      <AuthStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="ForgotPassword"
        component={ForgotPassword}
      ></AuthStackScreen.Screen>
    </AuthStackScreen.Navigator>
  );
};

export default AuthStack;
